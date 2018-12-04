'use strict'
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task-list', { useNewUrlParser: true })
.then(() => {
   console.log('connected to database');
})
.catch((error) => {
	console.log(error.message);
})

module.exports = mongoose;