const express = require("express");
const app = express();
const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://bundheliyadeep:Deep1234@cluster0.hpg57sk.mongodb.net/ecommerce?retryWrites=true&w=majority"
  );
  console.log("database connected");
};
main().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hey body");
});

app.listen(8080);
