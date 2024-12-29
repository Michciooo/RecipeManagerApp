const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
    nazwa : {type: String , maxlength: 30},
    ingredients : {type: [String] , maxlength: 20},
    instruction : {type : String , maxlength: 100},
    rate : {type: Number , max : 5},
})

module.exports = mongoose.model("Recipe" , RecipeSchema) //nazwa , schemat