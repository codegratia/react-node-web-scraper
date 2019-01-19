'use strict'
const app = require('express')();




require('./server/routes')(app); 
require('./server/express')(app);



app.listen(3000, () => {
    console.log('Server running');

});