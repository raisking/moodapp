const mongoose = require('mongoose');


  const FoodSchema = new mongoose.Schema({
    txtPost:{ type: String, required: true}
    
  });
module.exports = mongoose.model('Food', FoodSchema,'Food');
