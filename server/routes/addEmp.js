var express=require('express');
var router=express.Router();
var Employee=require('../../database/EmployeeSchema');
var mongoose=require('mongoose');

router.get('/',function(req,res,next){
  console.log("shivam");

   res.send("shivam calling post from addEmp.js")
});

router.post('/',function(req,res,next){
//var Employee1=new Employee(req.body.userModel);
  console.log("shivam"+req.body);
  console.log(req.body.EmployeeName)
 var EmployeeName1=req.body.EmployeeName;
 var Designation1=req.body.Designation;
var Project1 =req.body.Project;
var Skills1=req.body.Skills;
 

    var db = new Employee();
    var response = {};
    db.EmployeeName=EmployeeName1;
    db.Designation=Designation1;
    db.Project=Project1;
    db.Skills=Skills1;
    db.save(function(err){
         if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }

    });


    res.send(EmployeeName1+" :  "+Designation1+" :  "+Project1 +"  :  "+Skills1);

});


module.exports=router;