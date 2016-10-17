var express = require('express');
var router  = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

// For encrypting the user password, we use the npm package password-hash
router.post('/', function(req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email:  req.body.email
    });
    user.save(function(err, result) {
        if (err){
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'User created',
            obj: result
        });
    });
});

router.post('/signin', function(req,res,next) {
    User.findOne({email: req.body.email}, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'Cannot Sign-in. An error occurred.',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No user found.',
                error: {message: 'User could not be found!'}
            });
        }
        if (!passwordHash.verify(req.body.password, doc.password)) {
            return res.status(404).json({
                title: 'Sign-in failed with given credentials.',
                error: {message: 'Invalid Password!'}
            });
        }

        var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'JWT created successfully. Expires in 7200 seconds.',
            token: token,
            userId: doc._id,
            userFirstName: doc.firstName
        });
    })
});

module.exports = router;

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
*/