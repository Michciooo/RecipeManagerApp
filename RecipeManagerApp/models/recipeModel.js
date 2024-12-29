const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    nazwa : {type: String  ,minLength:5 ,maxlength: 30,required: true},
    ingredients : {type: [String] ,minLength:2, maxlength: 20,required: true},
    instruction : {type : String ,minLength : 10, maxlength: 100,required: true},
    rate : {type: Number ,min:0, max : 5,required: true},
})

module.exports = mongoose.model("Recipe" , RecipeSchema) //nazwa , schemat