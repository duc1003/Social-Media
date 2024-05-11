import express from 'express';
import cors from 'cors';
const app = express();

import {usersRoutes , authRoutes, commentsRoutes, postsRoutes, relationshipsRoutes, storiesRoutes} from "./routes/index.js";
import cookieParser from 'cookie-parser';



// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comment", commentsRoutes);
app.use("/api/post", postsRoutes);
app.use("/api/relationship", relationshipsRoutes);
app.use("/api/story", storiesRoutes);

app.listen(8080, () => {
    console.log(`Server started on 8080`);
});