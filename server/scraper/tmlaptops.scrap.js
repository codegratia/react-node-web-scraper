var request = require('request');
var cheerio = require('cheerio');

    // let promise = Promise.all(laptops);
    
   exports.laptops = () =>{
   
    var laptops = [];
 request('https://www.telemart.pk/mobile-and-tablets/accessories/charger.html', function(error, response, html){
    if(!error && response.statusCode==200){
        var $ = cheerio.load(html);
        $('li.col-lg-3', html).each(function(i, element){
            var item =  {}
            var list =  $(this);
        
            item.title = list.children().children().children().attr('title');
            item.url   = list.children().children().children().attr('href');
            item.image = list.children().children().children().attr('src');
            item.availability = list.children('div.item-wrap').children('div.pro-info').children('div.pro-inner')
                                   .children('div.wrap-pio').children().text();
            
            item.price = list.children('.item-wrap').children('.pro-info').children('.pro-inner').children('.pro-content')
                            .children('.wrap-price').children('.price-box').children('.special-price').children('.price').text();
                                               
             laptops.push(item);
             
               console.log(laptops);
        
        })   
    }

 

    

})
  };
  
     

    