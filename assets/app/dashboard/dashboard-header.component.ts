import { Component } from "@angular/core";
import { InputText } from 'primeng/primeng';

@Component({
    selector: 'nf-dashboard-header',
    template: `
     <header>
        <section class="col-md-8 col-md-offset-2">
            <h3>Input</h3>
            <input type="text" [(ngModel)]="input"/>
            <br/><br/>            
            <label>{{ input }}</label>
        </section>
      </header>        
    `,
    directives: [InputText]
})
export class DashboardHeaderComponent {

}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */