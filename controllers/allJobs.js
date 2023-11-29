const JobController = require('./JobController')
const allJobs = async (req, res) => {
    const jobs = await new JobController().getAllJobs()
    if (jobs.length === 0) return res.json({ jobs: jobs, status: "false" })
    return res.json({ jobs: jobs })
}

module.exports = allJobs