const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    nazwa : {type: String  ,maxlength: 30,required: true},
    ingredients : {type: [String] , maxlength: 20,required: true},
    instruction : {type : String , maxlength: 100,required: true},
    rate : {type: Number , max : 5,required: true},
})

module.exports = mongoose.model("Recipe" , RecipeSchema) //nazwa , schemat