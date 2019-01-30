'use strict'
const app = require('express')();




require('./server/routes')(app); 
require('./server/express')(app);



app.listen(4200, () => {
    console.log('Server running');

});