const express = require('express');
const bodyParser = require('body-parser');

// local Imports

const connectDb = require('./db.js');

const app =express();

//Middleware
app.use(bodyParser.json());




connectDb()
    .then(() => { 
        console.log('DB connection Successful');
        app.listen(3000,() => console.log('server started at 3000'));
    })
    .catch(err => console.log(err));

/*
mhaquetuc
iuFftbFvv1iR3CkL*/