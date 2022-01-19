const express = require("express");
// const authRouter = require("./auth");
const userRouter = require("./userRoute");

const app = express();

// app.use("/auth/", authRouter);
app.use("/", userRouter);

module.exports = app;