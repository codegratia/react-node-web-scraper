var request = require('request');
var cheerio = require('cheerio');


 request('https://www.telemart.pk/mobile-and-tablets/accessories/charger.html', function(error, response, html){
    if(!error && response.statusCode==200){
        var $ = cheerio.load(html);
        $('div.item-image', html).each(function(i, element){
            var a =$(this);
            var url = a.children().attr('href');
            for(i= 0; i<= url.length;i++){
                console.log(url[i]);
            }
        
            
        
            
       exports.mobiles = () => {
                var data = {
                url:url
                     }
            return data;
        
           }
          
        })
    }
})
// exports.mobiles = () =>{
//     console.log('All Mobiles');

//     var data = {
//         name: 'ehman',
//         age: 23
//         }  
//      return data;
//     };