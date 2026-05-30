import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectDB from "./db/connectToMongoDB.js";
import {app,  server } from "./socket/socket.js";


dotenv.config({ path: "./backend/.env" });

//middleware to parse incoming body data (from req.body)
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  connectDB().then(() => {
    console.log(`Server conneted to port ${PORT}`);
  });
});
