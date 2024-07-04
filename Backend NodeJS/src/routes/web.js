const express = require('express')
const router = express.Router()
const { getHomePage, getTest } = require('../controllers/homeController')

// khai báo route
router.get('/', getHomePage)
router.get('/test', getTest)


module.exports = router;