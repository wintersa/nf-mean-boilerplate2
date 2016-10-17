import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { User } from "./user";

@Injectable()
export class AuthService {
    private _userFirstName;

    
    constructor(private _http: Http) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/user', body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    getLoggedInUser(): string {
        if (!this._userFirstName) {
            this._userFirstName = localStorage.getItem('userFirstname');
        }
        return this._userFirstName;
    };

    setLoggedInUser(Firstname: string): void {
        localStorage.setItem('userFirstname', Firstname);
        this._userFirstName = Firstname;
    };
}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */