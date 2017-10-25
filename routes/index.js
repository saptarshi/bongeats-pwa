const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Recipe = require('../models/recipe');

if (mongoose.connection.readyState == 0) {
  mongoose.connect('mongodb://127.0.0.1:27017/bong-eats');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  Recipe.find()
    .then(function(doc) {
      res.render('index', {recipes: doc});
    });
});

module.exports = router;
