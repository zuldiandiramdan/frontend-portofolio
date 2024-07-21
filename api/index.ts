import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "express", "index.html"));
});

app.get('/react', (req, res) => {
    res.sendFile(path.join(__dirname, "react", "index.html"));
});

module.exports = app;
