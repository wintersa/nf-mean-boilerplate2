import { Component } from '@angular/core';
import { SignupComponent } from "./signup.component";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { SigninComponent } from "./signin.component";
import { AuthService } from "./auth.service";

@Component({
    selector: 'nf-auth',
    template: `
        <header class="nf-header-style row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">                    
                    <li><a [routerLink]="['signin']" *ngIf="!isLoggedIn()">Signin</a></li>
                    <li><a [routerLink]="['signup']">Signup</a></li>
                </ul>        
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, SignupComponent],
    styles: [`           
        .router-link-active {
            cursor: default;
            color: #0a0a0a;
            background-color: #3399ff;
            border: 1px solid #ddd;
            border-bottom-color: #3333bb;
        }
    `]
})

@Routes([
    {path: '/signin', component: SigninComponent},
    {path: '/signup', component: SignupComponent}
])

export class AuthenticationComponent {

    constructor(private _authService:AuthService) {
    }

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }

}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */