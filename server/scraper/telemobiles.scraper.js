var request = require('request');
var cheerio = require('cheerio');


 exports.mobiles = () =>{
   
    var mobiles = [];


 request('https://www.telemart.pk/mobile-and-tablets/accessories/charger.html', function(error, response, html){
    if(!error && response.statusCode==200){
        var $ = cheerio.load(html);
        $('li.col-lg-3', html).each(function(i, element){
            var item={}
            
            var list =$(this);
        
            var title = list.children().children().children().attr('title');
            // var url = $('div.item-image > a.product-image').attr('href');
            // var title = $('a.product-image').attr('title');
            // var image = $('a.product-image > img.lazy ').attr("src");
            // var price =$('span.regular-price > span.price').text();
            // var availability =$('div.wrap-pio > span.ins',html).text(),
            console.log(title);
            
        })
    }
}).then(result => {
    console.log('for each ends');
    console.log(mobiles);
});


 
 
 
 return mobiles;
}