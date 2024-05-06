import express from 'express';
import { getUser } from '../controller/UserController.js';

const route = express.Router();

route.get("/find/:userId", getUser);

export default route;