'use strict';

const Model = require('../model');
const productsSchema= require('./products.schema');


class Products extends Model{
    constructor(){
        super(productsSchema)
    }
}

module.exports = new Products();