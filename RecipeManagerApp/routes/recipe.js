var Recipe = require('../models/recipeModel');
const express = require("express");
var router = express.Router();

router.get('/', async (req, res) => {
    try{
        var recipes = await Recipe.find(); //wyszukiwanie obiektow z bazy
        res.json(recipes);
    }
    catch (e) {
        res.status(400).send({error: e});
    }
})
router.post('/recipe' , async (req, res) => {
    try {
        const {nazwa, ingredients, instruction, rate} = req.body; //pobranie danych z body (destrukturyzacja)
        const newRecipe = new Recipe({
            nazwa, ingredients, instruction, rate
        })
        const saveRecipe = await newRecipe.save();
        res.status(201).json(saveRecipe);
    }
    catch (e) {
        res.status(400).send({error: e});
    }
})
router.put('/recipe/:id' , async (req, res) => {
    try{
        const {id} = req.params;
        const {nazwa, ingredients, instruction, rate} = req.body;
        const newRecipe = await Recipe.findByIdAndUpdate(id ,{nazwa , ingredients , instruction , rate} , {new : true , runValidators : true})
        res.status(201).json(newRecipe);
    }catch (e) {
        res.status(400).send({error: e});
    }
})
router.delete('/recipe/:id' , async (req, res) => {
    try{
        const {id} = req.params;
        const recipeToDelete = await Recipe.findByIdAndDelete(id)
        res.status(201).json(recipeToDelete);
    }catch (e) {
        res.status(400).send({error: e});
    }
})

module.exports = router;