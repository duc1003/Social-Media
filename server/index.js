import express from 'express';
const app = express();

import {usersRoutes , authRoutes, commentsRoutes, postsRoutes, relationshipsRoutes, storiesRoutes} from "./routes/index.js";

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comment", commentsRoutes);
app.use("/api/post", postsRoutes);
app.use("/api/relationship", relationshipsRoutes);
app.use("/api/story", storiesRoutes);

app.listen(8080, () => {
    console.log(`Server started on 8080`);
});