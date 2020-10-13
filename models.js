const mongoosee = require('mongoose');
 
const ProductSchemma = new mongoosee.Schema({
    name: String,      
});
  
const product = mongoosee.model("Product", ProductSchemma);

module.exports = product;