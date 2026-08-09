const express = require("express");
const Job = require("../models/jobModel");
const { createJob, deleteJob, getJob, getJobs } = require("../controllers/jobController")
const router = express.Router();
router.use(express.json());
//get all jobs
router.get("/", getJobs);
//get a single job
router.get("/:id", getJob);
//post a new job
router.post("/", createJob);
//delete a job
router.delete("/:id", deleteJob);

module.exports = router;