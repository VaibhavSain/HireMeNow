const express = require("express");
const cors = require("cors")
const Job = require("../models/jobModel");
const { createJob, deleteJob, getJob, getJobs } = require("../controllers/jobController")
const router = express.Router();
router.use(express.json());
router.use(cors({
    origin: "https://hireindiano1.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
//get all jobs
router.get("/", getJobs);
//get a single job
router.get("/:id", getJob);
//post a new job
router.post("/", createJob);
//delete a job
router.delete("/:id", deleteJob);

module.exports = router;