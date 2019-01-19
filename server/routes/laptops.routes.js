var express = require('express');


var router =express.Router();

const Telemart = require('../scraper/telemart.scraper');
router.get('/', function(req, res){
   var laptops = Telemart.alllaptops();
   console.log(laptops);
    res.status(200).json(laptops);
   


});
module.exports = router;