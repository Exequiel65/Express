const fs = require('fs');
const path = require('path');

let {products} = require('../data/database')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let ultimosVisitados = products.filter(product => product.category == "visited")
		let inSale = products.filter(product => product.category == "in-sale")
		
		res.render('index', {
			visited : ultimosVisitados,
			inSale
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
