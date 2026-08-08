const express = require("express");
require("dotenv").config();
//express app
const app = express();

//routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

//Listening for requests
app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port 4000");
});
