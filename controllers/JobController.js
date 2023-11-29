const db = require('../data-source')
const JobModel = require('../models/JobModel')
const JobEntity = require('../entity/Job')
module.exports = class JobController {
    async save({ idUser, titulo, descricao }) {
        const job = new JobModel(idUser, titulo, descricao, new Date())
        const jobTable = db.getRepository(JobEntity)
        const jobTableSave = await jobTable.save(job);
        return jobTableSave;
    }

    async getAllJobs() {
        const getAllJobs = await db.manager.getRepository(JobEntity)
        return await getAllJobs.find()
    }
}