const express = require("express");
require("dotenv").config();
const mongoose = require('mongoose');
const jobRoutes = require("./routes/Jobs.js")
//express app
const app = express();

//routes
app.use("/api/jobs", jobRoutes);
//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
})

//connect to db

mongoose.connect(process.env.MONGO_URL).then(() => {
  //Listening for requests
  app.listen(process.env.PORT || 4000, () => {
    console.log("Connect to db & listening on port", process.env.PORT);
  });
}).catch((error) => {
  console.log(error);
})
