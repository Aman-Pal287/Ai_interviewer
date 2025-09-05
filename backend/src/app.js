const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const userTopicRoutes = require("./routes/userTopic.routes");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// Using Routes
app.use("/auth", authRoutes);
app.use("/api", userTopicRoutes);

module.exports = app;
