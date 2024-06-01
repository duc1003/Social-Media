import express from 'express';
import cors from 'cors';

import {usersRoutes , authRoutes, commentsRoutes, postsRoutes, relationshipsRoutes, storiesRoutes} from "./routes/index.js";
import cookieParser from 'cookie-parser';
import "dotenv/config.js"


const app = express();

// MIDDLEWARE
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", true);
    next();
})
app.use(express.json());

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser());


app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comment", commentsRoutes);
app.use("/api/post", postsRoutes);
app.use("/api/relationship", relationshipsRoutes);
app.use("/api/story", storiesRoutes);

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server started on 8080`);
});