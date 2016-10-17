import { Component } from '@angular/core';
import { DashboardHeaderComponent } from "./dashboard-header.component";
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';

@Component({

    selector: 'nf-dashboard',
    template: `
        <div class="row spacing">
            <nf-dashboard-header></nf-dashboard-header>
         </div>
         <div class="row spacing">
            <p-tabView>
                <p-tabPanel header="Godfather I" leftIcon="fa-calendar">
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                </p-tabPanel>
                <p-tabPanel header="Godfather II" leftIcon="fa-print">
                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                </p-tabPanel>
                <p-tabPanel header="Godfather III" leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">
                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                </p-tabPanel>
            </p-tabView>
        </div> 
    `,
    directives: [DashboardHeaderComponent, TabView, TabPanel]

})

export class DashboardComponent {


}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */