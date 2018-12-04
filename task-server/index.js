'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 4568;
const {db} = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('./controllers/signUp'));
app.use(require('./controllers/login'));
app.use(require('./controllers/users'));

app.listen(port, ()=>{
	console.log(`server started at port ${port}`)
})