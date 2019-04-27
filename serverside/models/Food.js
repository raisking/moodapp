const mongoose = require('mongoose');

  const FoodSchema = new mongoose.Schema({
    Food:{ type: String, required: true}
    
  });
module.exports = mongoose.model('Food', FoodSchema,'Food');