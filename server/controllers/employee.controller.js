const express = require('express');
const router = express.Router();

const Employee = require('../models/employee.model');

router.get('/',(req,res) => {
    Employee.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.post('/', (req,res) => {
    console.log(req.body); 
    Employee.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => console.log(err))
})

module.exports = router;
