var express = require('express');


var router =express.Router();

const Telemart = require('../scraper/tmmobiles.scrap');
router.get('/', async function(req, res){
   var items = await Telemart.mobiles().then(result =>{
        return result;

         
    }).catch(err=>{
      console.log(err);
      return;
      
    })

    res.status(200).json(items);


});
module.exports = router;