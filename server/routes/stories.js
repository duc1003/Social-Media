import express from 'express';

const route = express.Router();

route.get("/test", (req, res) => {
    res.send("stories routes is ok!");
});

export default route;