const express = require("express");
const cors = require("cors")
const Job = require("../models/jobModel");
const { createJob, deleteJob, getJob, getJobs } = require("../controllers/jobController")
const router = express.Router();
router.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5173",
        "https://YOUR-FRONTEND-DOMAIN.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
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