const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("./db");
const ArtSchema = mongoose.model("ArtSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', (req, res)=>{
  ArtSchema.findOne(({id: parseInt(req.params.id)}), (err, result)=>{
    if(result === null){
      res.send("Artwork not found");
    }
    else{
      res.jsonp(result);
    }
  });
})

module.exports = router;
