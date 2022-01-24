let express = require('express')
let router = express.Router()
let controller = require('../controllers/mainController')
let userValidator = require('../validator/inputForm') 


router.get('/', controller.index)
router.get('/form', controller.form)
router.post('/form', userValidator, controller.formUpdate)
router.get('/user', controller.user)
router.get('/bye', controller.bye)



module.exports = router