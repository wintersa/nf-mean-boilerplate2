import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";
import { Router } from "@angular/router";
/* import { Messages } from 'primeng/primeng'; */

import { AuthService } from "./auth.service";
import { User } from "./user";
import { ErrorService } from "../errors/error.service";

@Component({
    selector: 'nf-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input [ngFormControl]="myForm.find('email')" type="text" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
                </div>
                <div>
                    <a class="right" href="">Password reset</a>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign In</button>
            </form>
            <p-messages [disabled]="!myForm.valid" [value]="msgs"></p-messages>
        </section>
    `
})

export class SigninComponent implements OnInit{
    myForm: ControlGroup;
    /* msgs: Messages[] = []; */

    constructor(private _fb:FormBuilder, private _authService:AuthService, private _router:Router, private _errorService:ErrorService) {}

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password)
        this._authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._authService.setLoggedInUser(data.userFirstName);;
                    this._router.navigateByUrl('/');
                },
                error => {
                    this._errorService.handleError(error);
                    this._router.navigate(['/auth/signin']);
                    /* this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'}); */
                }
            );
        this._router.navigate(['/']);
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required]
        });
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