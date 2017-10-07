var express=require('express');
var router=express.Router();

var Employee=require('../../database/EmployeeSchema');

router.get('/',function(req,res,next){
   Employee.find({},function(err,docs){
       res.send(docs);
   });
});




module.exports=router;