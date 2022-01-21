const fs = require('fs');
const path = require('path');

let {products, writeProductsJSON} = require('../data/database')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idProduct = +req.params.id
		let product = products.find(product => product.id === idProduct)
		
		res.render('detail',{
			product,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let lastId = 1
		products.forEach(product => {
			if (product.id > lastId) {
				lastId = product.id	
			}
		});
		let {name, price, discount, category, description} = req.body

		let newProduct = {
			id : lastId + 1,
			name,
			description,
			price,
			discount,
			image : "",
			category
		}

		products.push(newProduct)
		writeProductsJSON(products)
		
		res.redirect('/products')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let idProduct = +req.params.id
		let product = products.find(product => product.id === idProduct)

		res.render('product-edit-form',{
			product,
		})
	},
	// Update - Method to update
	update: (req, res) => {
		let idProduct = +req.params.id
		let {name, price, discount, category, description} = req.body
		products.forEach(product => {
			if (product.id === idProduct) {
				product.name = name
				product.price = price
				product.discount = discount
				product.category = category
				product.description=description
				product.image = req.file ? req.file.filename : ""; 
			}
		});

		if (fs.existsSync('./public/images/products', product.image)) {
			fs.unlinkSync(`./public/images/products/${product.image}`)
		} else{
			console.log('No encontré el archivo');
		}
		
		writeProductsJSON(products)
		
		res.redirect(`/products/detail/${idProduct}`)

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let idProduct = +req.params.id
		let newProducts = products.filter(product => product.id !== idProduct)
		products.forEach( product =>{
			if (product.id === idProduct && product.image !== "") {

				if (fs.existsSync('./public/images/products', product.image)) {
					fs.unlinkSync(`./public/images/products/${product.image}`)
				} else{
					console.log('No encontré el archivo');
				}
			}
				
		})
		
		writeProductsJSON(newProducts)
		res.redirect('/')
	}
};

module.exports = controller;