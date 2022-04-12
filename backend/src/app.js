const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const index = require("./routes/index");
const personRoute = require("./routes/personRoute");

app.use("/static", express.static(path.join(__dirname, "../../frontend")));

app.use(express.json({limit: '60mb'}));
app.use(express.urlencoded({limit: '60mb', extended: true}));

app.use("/", index);
app.use("/api", personRoute);

module.exports = app;
