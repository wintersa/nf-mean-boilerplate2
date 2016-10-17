import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router, ROUTER_DIRECTIVES } from "@angular/router";

import { AuthService } from "./auth/auth.service";
import { User } from "./auth/user";
/* import { BreadcrumbItem } from "./breadcrumbs/breadcrumb-item"; */
import { BreadcrumbComponent } from "./breadcrumbs/breadcrumb.component";
/* import { BreadcrumbService } from "./breadcrumbs/breadcrumb-service"; */


@Component({
    selector: 'nf-header',
    template: `
    <header>
        <nav class="nf-navbar navbar navbar-inverse">
            <div class="container-fluid">
             <!-- NF Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" [routerLink]="['/']">NForce-IT</a>
                </div>                
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a [routerLink]="['/']">Overview <span class="sr-only">(current)</span></a></li>
                        <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Administration <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a [routerLink]="['/auth/signup']">Authentication</a></li>
                            <li><a href="#">Roles</a></li>
                            <li><a href="#">System</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Cloud Providers</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Node Management</a></li>
                        </ul>
                        </li>
                        <li><a [routerLink]="['/About']">About</a></li>
                        <li><a [routerLink]="['/Servers']">Servers</a></li>
                        <li><a [routerLink]="['/Reports']">Reports</a></li>
                    </ul>
                    <!-- NF Account Settings -->
                    <ul class="nav navbar-nav navbar-right">
                         <li class="dropdown">
                            <a href="#" *ngIf="isLoggedIn()" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hello, {{ userFirstName }} <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Notifications</a></li>
                                <li><a href="#">Settings</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a [routerLink]="['/auth/signin']" *ngIf="!isLoggedIn()">Signin</a></li>
                                <li><a [routerLink]="['/auth/signup']">Signup</a></li>
                                <li><a (click)="onLogout()" *ngIf="isLoggedIn()">Logout</a></li>                                
                            </ul>
                         </li>
                    </ul>
                </div>
             </div>
        </nav>     
      <!-- NF Breadcrumb Bar -->
      <nf-breadcrumb></nf-breadcrumb>
    </header>   
    `,
    directives: [ROUTER_DIRECTIVES, BreadcrumbComponent],
})

export class HeaderComponent implements OnInit{
    userFirstName: string;
    /* breadCrumbData: Array<BreadcrumbItem>; */

    constructor(private _authService:AuthService, private _router:Router) {}
    /* constructor(private _authService:AuthService, private _router:Router, private _breadcrumbService:BreadcrumbService) {} */

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }

    /* Clear the localStorage and navigate always back to signin page after logout*/
    onLogout() {
        this._authService.logout();
        this._router.navigate(['/auth/signin']);
    }

    ngOnInit() {
        this.userFirstName = this._authService.getLoggedInUser();

        /* this.breadCrumbData = this._breadcrumbService.getBread CrumbData(); */
    }
}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */