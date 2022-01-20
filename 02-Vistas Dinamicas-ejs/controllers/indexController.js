let {products} = require('../data/database')

let controller = {
    index : (req, res) =>{
        res.render('index',{
            products
        })
    },
    menu : (req, res) =>{
        let idProduct = +req.params.id
        let product = products.find(product => product.id === idProduct)

        res.render('detalleMenu',{
            product
        })
    }
}

module.exports = controller