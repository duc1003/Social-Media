import express from 'express';

const route = express.Router();

route.get("/test", (req, res) => {
    res.send("likes routes is ok!");
});

export default route;