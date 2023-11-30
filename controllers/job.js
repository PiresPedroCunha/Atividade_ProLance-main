const JobController = require('./JobController')
const job = async (req, res) => {
    const  id  = req.params.id
    const job = await new JobController().getJob(id)
    console.log(job)
    if (job.length === 0) return res.json({ jobs: job, status: "false" })
    return res.json({ job: job })
}

module.exports = job