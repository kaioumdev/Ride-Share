const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hellow World");
});

module.exports = app;