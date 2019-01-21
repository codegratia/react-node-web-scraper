const express =require('express');


module.exports = function(app){
    console.log('Routes');
    app.use('/api/tmmobiles', require('./tmmobiles.routes'));
    app.use('/api/tmlaptops', require('./tmlaptops.routes'));
    app.use('/api/tmaccessories', require('./tmaccessories.routes'));
};

