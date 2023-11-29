const express = require('express')
const router = express.Router()
const register = require('./register')
const login = require('./login')
const jobs = require('./jobs')
const allJobs = require('./allJobs')

router.post('/register', register)
router.post('/login', login)
router.post('/jobs', jobs)
router.get('/jobs', allJobs)

module.exports = router;