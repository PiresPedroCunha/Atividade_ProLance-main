const express = require('express')
const router = express.Router()
const register = require('./register')
const login = require('./login')
const jobs = require('./jobs')
const allJobs = require('./allJobs')
const job = require('./job')

router.post('/register', register)
router.post('/login', login)
router.post('/jobs', jobs)
router.get('/jobs', allJobs)
router.get('/job/:id', job)

module.exports = router;