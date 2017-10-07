import { Injectable } from '@angular/core';  
import { Http, Headers, RequestOptions, Response } from '@angular/http';  
//import { Observable } from "RxJS/Rx";  
import {EmployeeModel} from '../components/AddEmployee/Employee';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()  
export class EmployeeServcies {  
    private BASE_URL:string = 'http://localhost:4600/api';
    private BASE_URL_addEmployee:string = 'http://localhost:4600/addEmployee';

    constructor(private http: Http) {       
    }  
    getEmployeeList() {  
        return this.http.get(this.BASE_URL);  
    }  

        public addEmployee(body:EmployeeModel){
        // let options = new RequestOptions({
        // 	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        // });
       
        
		// var i= this.http.post(`${this.BASE_URL_addEmployee}`,JSON.stringify(body), options);
        // return i;

     	let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        });
       let headers :Headers;
       headers = new Headers();
       //headers.append('Content-Type', 'application/json;charset=UTF-8');
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       headers.append('Cache-Control', 'no-cache');
       headers.append('Pragma','no-cache');       

        return this.http.post(this.BASE_URL_addEmployee,body, headers)
		//return this.http.post(`${this.BASE_URL_addEmployee}`,JSON.stringify(body), options)
			.toPromise()
            .then(this.extractData)
			//.catch((error:any) => Observable.throw(error.json().error || 'Server error'));





    }

    private extractData(res: Response)
    {
        let body = res;

        return body || {};
    }
  
}   