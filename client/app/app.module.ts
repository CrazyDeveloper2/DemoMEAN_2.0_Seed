import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';  

import { AppComponent } from './components/app/app.component';

import {NavMenuComponent} from './components/navmenu/navmenu.component';
import {addEmployeeComponent}  from "./components/AddEmployee/AddEmployee.component";
import {homeComponent}  from "./components/home/home.component";  
import {editComponent} from "./components/edit/edit.component";  
import {detailsComponent} from "./components/details/details.component";  
import {EmployeeServcies} from "./services/services";
@NgModule({  
    imports: [BrowserModule, HttpModule, FormsModule,RouterModule.forRoot([
       { path: '', redirectTo: 'home', pathMatch: 'full' },  
            { path: 'home', component: homeComponent },  
            { path: 'details/:id', component: detailsComponent },  
            { path: 'add', component: addEmployeeComponent },  
            { path: 'edit/:id', component: editComponent },  
            { path: '**', redirectTo: 'home' }  

    ])],  
    providers:[EmployeeServcies],
    declarations: [AppComponent,
                   NavMenuComponent,
                   addEmployeeComponent,
                   homeComponent,
                   editComponent,
                   detailsComponent  
    ],
    bootstrap: [AppComponent]  
})  
export class AppModule { } 