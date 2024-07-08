import express from 'express';
import { addPost, getPosts } from '../controller/PostsController.js';

const route = express.Router();

route.get("/getPosts", getPosts);
route.post("/addPost", addPost);

export default route;