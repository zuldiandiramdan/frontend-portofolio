import express from "express";
import path from "path";

const app = express();

app.use(
  "/static-react/",
  express.static(path.join(__dirname, "react", "react-frontend", "out"))
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "express", "index.html"));
});

app.get("/react", (req, res) => {
  res.sendFile(path.join(__dirname, "react", "react-frontend", "out", "index.html"));
});

module.exports = app;
