const mongoose = require("mongoose");
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
router.post('/abc' , async (req, res) => {
    try {
        const {nazwa, ingredients, instruction, rate} = req.body; //pobranie danych z body (destrukturyzacja)
        const newRecipe = new Recipe({
            nazwa, ingredients, instruction, rate
        })
        const saveRecipe = await newRecipe.save();
    }
    catch (e) {
        res.status(400).send({error: e});
    }
})

module.exports = router;