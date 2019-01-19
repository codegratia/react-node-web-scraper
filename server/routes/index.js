const express =require('express');


module.exports = function(app){
    console.log('Routes');
    app.use('/api/mobiles', require('./mobiles.routes'));
    app.use('/api/laptops', require('./laptops.routes'));
    app.use('/api/telembl', require('./telembl.routes'));
};

