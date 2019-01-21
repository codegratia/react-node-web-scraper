var express = require('express');


var router =express.Router();

const Telemart = require('../scraper/tmmobiles.scraper');
router.get('/', function(req, res){
   var data = Telemart.allmobiles();
   console.log(data);
    res.status(200).json(data);
   


});
module.exports = router;