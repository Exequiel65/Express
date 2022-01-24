let user;
let { validationResult } = require('express-validator')

let controller = {
    index : (req, res) =>{
        res.render('index')
    },
    form : (req, res) =>{
        res.render('form')
    },
    formUpdate: (req, res) =>{
        let error = validationResult(req)
        if( error.isEmpty()){

            user = req.body

            
            if (req.body.check) {
                res.cookie('practicaCookie', user.color, {

                    httpOnly : true,
                    secure : true

                })
            }
            
            
            res.redirect('/user')
        } else {
            res.render('form', {
                errors: error.mapped()
            })
        }

        
    },
    user : (req, res) =>{
        res.render('user', {
            user
        })
    },
    bye : (req, res) =>{
        res.render('goodbye',{
            user
        })
    },
    destroy : (req, res) =>{
        if (req.cookies.practicaSession) {
            res.cookie('practicaCookie', "", { maxAge : -1})
        }
        res.redirect('/user')
    }

}

module.exports = controller