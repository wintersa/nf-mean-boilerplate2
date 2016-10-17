import { Injectable } from "@angular/core";
import { MenuItem } from 'primeng/primeng';
import { BreadcrumbItem } from "./breadcrumb-item";


@Injectable()
export class BreadcrumbService {
    private _BreadCrumbData;
    private items: MenuItem[];

    constructor() {}

    getBreadCrumbData(): BreadcrumbItem {
        return this._BreadCrumbData;
    };

    updateBreadCrumbData(breadcrumbData: BreadcrumbItem): void {
        this._BreadCrumbData = breadcrumbData;
        /*this.items.push({breadcrumbData});*/
    };

    /* insertItem(item: ListItem) {
        shopping_list.push(item);
    } */

}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */