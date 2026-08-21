const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require('mongoose');
const jobRoutes = require("./routes/Jobs.js")
//express app
const app = express();
const PORT = process.env.PORT || 5000;


//routes
app.use("/api/jobs", jobRoutes);
app.use(cors());
//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

//connect to db
mongoose.connect(process.env.MONGO_URL).then(() => {
  //Listening for requests
  app.listen(PORT, "0.0.0.0", () => {
    console.log("Connect to db & listening on port", process.env.PORT);
  });
}).catch((error) => {
  console.log(error);
})
