import { db } from "../model/database/Connect.js";
import jwt from "jsonwebtoken";
import { keyToken } from "../utils/key.js";

export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in");

  jwt.verify(token, keyToken, (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid");

    const query =
      "select p.*, u.id as userId, name, profilePic from posts as p join users as u on( p.userId = u.id) join relationships as r on(p.userId = r.followedUserId) where r.followedUserId = ? or p.userId = ? order by p.createdAt desc";

    db.query(query, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  res.send("add post");
};
