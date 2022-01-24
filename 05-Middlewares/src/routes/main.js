let express = require('express');

let router = express.Router()
let mainController = require('../controllers/mainController')
let adminCheck = require('../middlewares/adminCheck')

router.get('/', mainController.index)
router.get('/admin', adminCheck, mainController.admin)

module.exports = router