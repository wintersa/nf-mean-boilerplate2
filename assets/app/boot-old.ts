///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { provide } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";
import { BreadcrumbService } from "./breadcrumbs/breadcrumb-service";
/* import { LoggerService } from "./logger/logger.service"; */


bootstrap(AppComponent, [AuthService, ErrorService, BreadcrumbService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);


/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */
