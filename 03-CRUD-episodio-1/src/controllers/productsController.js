const fs = require('fs');
const path = require('path');

let {products} = require('../data/database')

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
		res.send(req.body)
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
		
		res.send(req.body)

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let idProduct = +req.params.id
		let product = products.find(product => product.id === idProduct)

		res.send(`Producto ${product.name}, id ${product.id} ha sido borrado`)
	}
};

module.exports = controller;