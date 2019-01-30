var express = require('express');


var router =express.Router();

const IShopping = require('../scraper/ismobiles.scrap');
router.get('/', async function(req, res){
   var items = await IShopping.mobiles().then(result =>{
        return result;

         
    }).catch(err=>{
      console.log(err);
      return;
      
    })

    res.status(200).json(items);


});
module.exports = router;