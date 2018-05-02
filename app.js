const express 	= require('express') 
const app 		= express() 
const path		= require('path') 
let request 	= require('urllib-sync').request;
const config 	= require('./config/config');

const api 		= require('./api/api');

app.use('/api', api);

app.use(require('connect-history-api-fallback')())

app.use(express.static(path.join(__dirname, 'dist'))); 

app.listen(3000,() => { 
 console.log('app listening on port 3000.') 
})