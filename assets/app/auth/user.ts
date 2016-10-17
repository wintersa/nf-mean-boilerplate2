import { uuid } from '../utils/uuid';

export class User {

    id: string;
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string) {
        this.id = uuid();
    }

}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */