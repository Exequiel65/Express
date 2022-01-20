let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.get('/about', mainController.about)

module.exports = router