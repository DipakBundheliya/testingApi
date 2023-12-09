const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hey body");
});

app.listen(8080);
