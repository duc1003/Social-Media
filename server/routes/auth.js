import express from 'express';

const route = express.Router();

route.get("/test", (req, res) => {
    res.send("auth routes is ok!");
});

export default route;