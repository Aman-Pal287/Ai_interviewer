const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// Using Routes
app.use("/auth", authRoutes);

module.exports = app;
