const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: [String]
    },
    responsibilities: {
        type: [String]
    },
    jobLink: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("job", jobSchema);