var express = require('express');


var router =express.Router();

const Telemart = require('../scraper/tmlaptops.scrap');
router.get('/', function(req, res){
   var data = Telemart.laptops();
       console.log(data);
       res.status(200).json(laptops)
       
       

});
module.exports = router;