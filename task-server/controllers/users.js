'use strict'

const express = require('express');
const router = express.Router();
const { user } = require('../models');

router.post('/usersList', (req, res, next) => {
    const data = req.body;
    const User = new user(data);
    User.save()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(400).json({message:error.message });
        })
})

router.get('/usersList', (req, res, next) => {
    user.find()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(next)
})

router.get('/usersList/:id', (req, res, next) => {
    const id = req.params.id;
    user.findById(id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(next)
})

router.put('/usersList/:id', (req, res, next) => {
    const id = req.params.id;
    user.findOneAndUpdate({ '_id': id }, { new: true })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)

})

router.delete('/usersList/:id', (req, res, next) => {
    const id = req.params.id;
    user.findOneAndRemove({ '_id': id })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})

router.use((error,req,res,next)=>{
    res.status(400).json({message:error.message})
})
module.exports = router