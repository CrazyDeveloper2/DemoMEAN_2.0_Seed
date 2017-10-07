// Server
// modules =================================================
//Import6 the required package for the server side application
var express        = require('express');
var path=require('path');
var bodyParser     = require('body-parser');

//Index and api contains path of the routing files for our application on server side
var index=require('./server/routes/index');
var api=require('./server/routes/api');
var addEmp=require('./server/routes/addEmp');


var app  = express();
var port= 4600; //Defining port on which this server side code will host


//view engine 
app.set('View Engine','ejs');//defining the view engine 
app.set('views',path.join(__dirname,'/client/views'))//set the path for view engine 

app.engine('html',require('ejs').renderFile);//Register given template engine call back function as extension

//set Static Folder path for images,css and js(i.e static)
app.use(express.static(path.join(__dirname,'/client')));

//body parser is the middleware to parse data fro URL request and request body or header
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended:false}));  

app.use('/',index);
app.use('/api',api);
app.use('/addEmployee',addEmp)
app.use('*',index);

app.listen(port,function(){
   console.log('server listening at prot'+port);
});