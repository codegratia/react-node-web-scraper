var express = require('express');


var router =express.Router();

const Telemart = require('../scraper/telemobiles.scraper');
router.get('/', function(req, res){
   var data = Telemart.mobiles();
   console.log(data)
    res.status(200).json(data);
   


});
module.exports = router;