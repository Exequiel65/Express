let { check} = require('express-validator')


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Campo vacio, porfavor ingrese un nombre'),

    check('color')
    .notEmpty()
    .withMessage('Por favor seleccione un color'),

    check('email')
    .notEmpty()
    .withMessage('Por favor ingrese un email').bail()
    .isEmail()
    .withMessage('Ingrese un email valido'),

    check('age')
    .notEmpty()
    .withMessage('Ingrese su edad').bail()
    .isNumeric()
    .withMessage('Debe ingresar un numero valido')

]