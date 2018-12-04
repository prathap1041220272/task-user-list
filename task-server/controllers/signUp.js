'use strict'

const express = require('express');
const router = express.Router();
const { bcrypt, token } = require('../config');

const { user } = require('../models');

router.post('/signup', (req, res, next) => {
    // console.log(req.body)
    const password = bcrypt.hashPassword(req.body.password)
    req.body.password = password;
    const User = new user(req.body);
    User.save()
        .then(data => token.tokenGen(data.email))
        .then(token => res.json({ token }))
        .catch(error => {
            res.status(400).json({ error: error.message })
        })
})
module.exports = router;