import express from 'express';
import { getStories, saveStory } from '../controller/StoriesController.js';
import upload from '../middleware/multerMiddleware.js';

const route = express.Router();

route.post("/save", upload.single('file'), saveStory);
route.get("/get", getStories);

export default route;