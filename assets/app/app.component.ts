import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthService } from "./auth/auth.service";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { BreadcrumbService} from "./breadcrumbs/breadcrumb-service";
import { ErrorComponent } from "./errors/error.component";
/* import { LoggerService } from "./logger/logger.service"; */

import { User } from "./auth/user";

@Component({
    selector: 'nf-app',
    template: ` 
        <!-- The Header with Navbar and PrimeNG breadcrumb component -->
        <nf-header *ngIf="isLoggedIn()" class="nf-navbar"></nf-header>        
        <!-- NF Error Directive -->
        <nf-error></nf-error>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent],
    providers: [BreadcrumbService]
})


@Routes([
    {path: '/', component: DashboardComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent implements OnInit {
    constructor(private _authService:AuthService, private _router:Router) {}
    /* constructor(private _authService:AuthService, private _router:Router, private _loggerService:LoggerService) {} */

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }

    ngOnInit(){
        if(!this._authService.isLoggedIn()) {
            this._router.navigate(['/auth/signin']);
        }

    /* this._loggerService.info("Information", "Application is ready for you."); */
    }
}


/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */
