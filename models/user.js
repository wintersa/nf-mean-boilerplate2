var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

// Too validate the email address to be unique, we use the npm package mongoose-unique-validator
var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
  //  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);


/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */