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
var services_1 = require("./../../services/services");
var Employee_1 = require("./Employee");
var core_1 = require("@angular/core");
var addEmployeeComponent = /** @class */ (function () {
    function addEmployeeComponent(empService) {
        this.empService = empService;
        this.EmployeeModel = new Employee_1.EmployeeModel('', '', '', '');
    }
    addEmployeeComponent.prototype.addEmployee = function () {
        var userModel = this.EmployeeModel;
        var data = this.empService.addEmployee(userModel);
        console.log(data);
    };
    addEmployeeComponent.prototype.resetAddEmployee = function () {
        this.EmployeeModel = new Employee_1.EmployeeModel('', '', '', '');
    };
    addEmployeeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'addEmployee',
            templateUrl: 'AddEmployee.component.html',
        }),
        __metadata("design:paramtypes", [services_1.EmployeeServcies])
    ], addEmployeeComponent);
    return addEmployeeComponent;
}());
exports.addEmployeeComponent = addEmployeeComponent;
//# sourceMappingURL=AddEmployee.component.js.map