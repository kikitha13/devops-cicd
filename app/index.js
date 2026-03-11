const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Task Manager API Running",
    status: "healthy"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    uptime: process.uptime()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});