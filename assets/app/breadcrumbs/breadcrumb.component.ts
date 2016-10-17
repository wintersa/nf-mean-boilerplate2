import { Component, OnInit } from '@angular/core';
import {Breadcrumb, MenuItem} from 'primeng/primeng';
/* import { BreadcrumbItem } from "./breadcrumb-item"; */
import { BreadcrumbService } from "./breadcrumb-service";

@Component({
    selector: 'nf-breadcrumb',
    template: `
        <div class="nf-breadcrumb">
            <p-breadcrumb [model]="items"></p-breadcrumb>                        
        </div>
    `,
   directives: [Breadcrumb]
})


export class BreadcrumbComponent implements OnInit  {
    private items: MenuItem[];

    constructor(private _breadcrumbService:BreadcrumbService) {};

    ngOnInit() {
        this.items = [];
        this.items.push({label:'Dashboard', routerLink:  ['/'] });
    }
}


/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */