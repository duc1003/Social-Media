import express from 'express';

const route = express.Router();

route.get("/test", (req, res) => {
    res.send("posts routes is ok!");
});

export default route;