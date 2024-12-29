const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
    name : {type: String, required: true , maxlength: 30},
    ingredients : {type: [""], required: true , maxlength: 20},
    instruction : {type : String, required: true , maxlength: 100},
    rate : {type: Number, required: true , max : 5},
})

module.exports = mongoose.model("recipe" , RecipeSchema) //nazwa , schemat