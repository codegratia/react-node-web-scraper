var express = require('express');


var router =express.Router();

const Telemart = require('../scraper/tmlaptops.scrap');
router.get('/', async function(req, res){
   var items = await Telemart.laptops().then(result =>{
        return result;

         
    }).catch(err=>{
      console.log(err);
      return;
      
    })

    res.status(200).json(items);


});
module.exports = router;