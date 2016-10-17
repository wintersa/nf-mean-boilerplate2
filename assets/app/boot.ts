import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
/*import { provide } from "@angular/core"; */
/*import { HTTP_PROVIDERS } from "@angular/http";*/

import { AppComponent } from "./app.component";
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";


@NgModule({
    declarations: [AppComponent],
    imports:[BrowserModule, ROUTER_PROVIDERS],
    providers: [AuthService, ErrorService, LocationStrategy, HashLocationStrategy],
    bootstrap: [AppComponent]
})

export class AppModule {

}


/* bootstrap(AppComponent, [AuthService, ErrorService, BreadcrumbService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]); */




/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */
