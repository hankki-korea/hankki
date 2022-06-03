const x = require("express");
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routers";
import cors from "cors";
import { appendFile } from "fs";

dotenv.config();
const app = express();
const port = 3080;
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lkyea.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`;

// app.use(
//   cors({
//     origin: true,
//     method: "GET, HEAD, PUT, PATCH, POST, DELETE",
//     credentials: true,
//   })
// );

// app.use(
//   session({
//     domain: "http://127.0.0.1:3080",
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: true,
//     resave: true,
//     cookie: {
//       path: "/",
//       httpOnly: true,
//       maxAge: 180 * 1000,
//     },
//     name: "session_name",
//     store: MongoStore.create({
//       mongoUrl: dbUrl,
//       ttl: 180,
//     }),
//   })
// );

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});

app.use("/api/", router);

app.post("/test", async (req, res) => {
  res.send("return to axios");
});
