import jwt from "jsonwebtoken";
import { db } from "../model/database/Connect.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => {
  const query = "SELECT * FROM users WHERE username= ?";

  db.query(query, [req.body.username], (err, data) => {
    if(err) return res.status(500).json(err);
    if(data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
    if(!checkPassword) return res.status(400).json("Password incorrect");

    const {password, ...others} = data[0];

    const token = jwt.sign({ id: data[0].id }, "secretKey");
    res.cookie("accessToken", token, {
      httpOnly: true})
      .status(200)
      .json(others);
  });
};

export const register = (req, res) => {
  // CHECK USER IF EXISTS
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");
    // Create a new user
    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const queryInsert = "INSERT INTO users (username, email, password, name) VALUES (?, ?, ?, ?)";
    const values = [ req.body.username, req.body.email, hashedPassword, req.body.name ];
    db.query(queryInsert, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  });
};


export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite:"none",
  }).status(200).json("User logged out");
};
