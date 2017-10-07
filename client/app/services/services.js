"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var EmployeeServcies = /** @class */ (function () {
    function EmployeeServcies(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:4600/api';
        this.BASE_URL_addEmployee = 'http://localhost:4600/addEmployee';
    }
    EmployeeServcies.prototype.getEmployeeList = function () {
        return this.http.get(this.BASE_URL);
    };
    EmployeeServcies.prototype.addEmployee = function (body) {
        // let options = new RequestOptions({
        // 	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        // });
        // var i= this.http.post(`${this.BASE_URL_addEmployee}`,JSON.stringify(body), options);
        // return i;
        var options = new http_1.RequestOptions({
            headers: new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
        });
        var headers;
        headers = new http_1.Headers();
        //headers.append('Content-Type', 'application/json;charset=UTF-8');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Cache-Control', 'no-cache');
        headers.append('Pragma', 'no-cache');
        return this.http.post(this.BASE_URL_addEmployee, body, headers)
            .toPromise()
            .then(this.extractData);
        //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    EmployeeServcies.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    EmployeeServcies = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeServcies);
    return EmployeeServcies;
}());
exports.EmployeeServcies = EmployeeServcies;
//# sourceMappingURL=services.js.map