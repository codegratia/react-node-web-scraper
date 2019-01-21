var request = require('request');
var cheerio = require('cheerio');

request('https://www.telemart.pk/mobile-and-tablets/accessories/charger.html',function(error, response, html){
    if(!error && response.statusCode ==200){
        // var products = [];
        var $ = cheerio.load(html);
        $('.product-image',html).each(function(i, element){
            var a =$(this); 

            var name = a.children().children().attr('href');
                // console.log(b.attr('href'));
                
                // products.push(product);
                // console.log($(' img').attr('src'));
        });
        // console.log(products);
    }
});
exports.allmobiles = () =>{
    console.log('All Mobiles');

    var data = {
        name: 'Rehman',
        age: 23
        }  
     return data;
    };
    exports.alllaptops = () =>{
        console.log('All Laptops');
    
        var laptops = {
            name: 'khan',
            age: 23
            }  
         return laptops;
        };
