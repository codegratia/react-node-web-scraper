// var request = require('request');
// var cheerio = require('cheerio');


//   exports.accessories = () =>{
   
//     var accessories = [];
//     return new Promise((resolve, reject)=>{

   
//  request('https://www.ishopping.pk/electronics/laptops-computers/accessories.html', function(error, response, html){
//     if(!error && response.statusCode==200){
//         var $ = cheerio.load(html);
//         $('li.col-xs-6', html).each(function(i, element){
//             var item =  {}
//             var list =  $(this);
        
//             item.title = list.children().children().children().children().attr('title');
//              item.url   = list.children().children().children().children().attr('href');
//               item.price = list.children().children().children().children().children('span.price').text();
                                            
//              accessories.push(item);
             
//             //  console.log(mobiles);   
//         })   
//     }
   
//     resolve(accessories);

// });
//     return accessories; 
// })
//   }