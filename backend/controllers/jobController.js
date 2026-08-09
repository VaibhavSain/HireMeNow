const Job = require("../models/jobModel");
const mongoose = require("mongoose");

//get all jobs
const getJobs = async (req, res) => {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.status(200).json(jobs);
}
//get a single job
const getJob = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Job" });
    }
    const job = await Job.findById(id);
    if (!job) {
        return res.status(404).json({ error: "No Such Job" });
    }
    res.status(200).json(job);
}
//create a new job
const createJob = async (req, res) => {
    const data = req.body;
    try {
        const job = await Job.create(data);
        res.status(200).json(job);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
//delete a job
const deleteJob = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Job" });
    }
    const job = await Job.findOneAndDelete({ _id: id });
    if (!job) {
        return res.status(400).json({ error: "No Such Job" });
    }
    res.status(200).json(job);
}

module.exports = {
    createJob,
    getJob,
    getJobs,
    deleteJob
}