import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/primeng';

import { User } from "./user";
import { AuthService } from "./auth.service";
import { ErrorService } from "../errors/error.service";
/*import { BreadcrumbItem } from "../breadcrumbs/breadcrumb-item";
import { BreadcrumbService } from "../breadcrumbs/breadcrumb-service";*/

@Component({
    selector: 'nf-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input [ngFormControl]="myForm.find('firstName')" type="text" id="firstName" class="form-control">
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input [ngFormControl]="myForm.find('lastName')" type="text" id="lastName" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input [ngFormControl]="myForm.find('email')" type="text" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
            </form>
        </section>
    `
})

export class SignupComponent implements OnInit {
    myForm: ControlGroup;
    private items: MenuItem[];
    /* private breadcrumbData = new BreadcrumbItem(); */
    
    constructor(private _router:Router, private _fb:FormBuilder, private _authService:AuthService, private _errorService:ErrorService) {}

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        console.log(user);
        this._authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)

            )
            this._router.navigate(['/auth/signin']);
        }

    ngOnInit() {
        this.items.push({label:'Authentication', routerLink:  ['/auth'] });
        this.items.push({label:'Signin', routerLink:  ['/auth/signin'] });



        this.myForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required]
        });

        /* const tony = new BreadcrumbItem;
        tony.location = "Tony";
        tony.url = "/auth/sigin" */


        /* this._breadcrumbService.updateBreadCrumbData(this.breadcrumbData); */
    }

    // This is a custom validator with RegEx for email validation
    private isEmail(control: Control): {[s: string]: boolean} {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            return {invalidMail: true};
        }
    }

}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */