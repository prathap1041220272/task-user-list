'use strict'

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {user} = require('../models');

function createToken(tokenData) {
    return new Promise((resolve, reject) => {
        jwt.sign(tokenData, 'dhasa', { expiresIn: 5 * 60 }, (error, token) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(token)
            }
        })
    })
}

router.post('/login', (req, res, next) => {
    let data = req.body;
    const email = req.body.email;
    let document = {}
    user.findOne({ email })
        .then((doc) => {
            if (!doc) {
                throw new Error('invalid usename')
            }
            document = doc;
            return bcrypt.compare(data.password, doc.password)
        })
        .then((result) => {
            if (!result) {
                throw new Error('invalid password')
            }
            return createToken({ id: document._id })
        })
        .then((token) => {
            if (!token) {
                throw new Error('invalid token')
            }
            res.status(200).json({ token: token })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
})

module.exports = router;