var mongoose=require('mongoose');

//connection URL

var db='mongodb://localhost:27017/employees';

mongoose.connect(db,function(error){
    if(error)
      console.log(error);
});

//Employee schema

var Schema=mongoose.Schema;
var Employee_Schema=new Schema({
    EmployeeName:String,
    Designation:String,
    Project:String,
    Skills:String 
});

var Employee=mongoose.model('employees',Employee_Schema);
module.exports=Employee;