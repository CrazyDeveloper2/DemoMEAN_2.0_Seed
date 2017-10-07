import {EmployeeServcies} from './../../services/services';
import {EmployeeModel} from './Employee';
import { Component } from '@angular/core'; 
import {Response} from '@angular/http'

@Component({
    moduleId:module.id,
    selector:'addEmployee',
    templateUrl:'AddEmployee.component.html',
})

export class addEmployeeComponent {
    public constructor(private empService:EmployeeServcies){
         
    }
     private EmployeeModel:EmployeeModel=new EmployeeModel('','','','')

     public addEmployee(){
         var userModel=this.EmployeeModel;
         var data=this.empService.addEmployee(userModel);
         console.log(data);
     }

     public resetAddEmployee(){
		this.EmployeeModel = new EmployeeModel('','','','')
	}
}

