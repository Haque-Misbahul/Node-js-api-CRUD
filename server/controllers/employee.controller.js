const express = require('express');
const router = express.Router();

const Employee = require('../models/employee.model');
const { generateCrudMethods } = require('../services');
const employeeCrud = generateCrudMethods(Employee);
const {validateDbId, raiseRecord404Error} = require('../middlewares');


router.get('/test', 
    (req,res,next) => {next()},
    (req,res) => {res.send('test')}
)


router.get('/',(req,res) => {
    employeeCrud.getAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})
router.get('/:id',validateDbId,(req,res) => {
    
        employeeCrud.getById(req.params.id)
            .then(data => {
                if (data)
                    res.send(data)
                else
                    raiseRecord404Error(req,res);
            })
            .catch(err => console.log(err))
})

router.post('/', (req,res) => {
    console.log(req.body); 
    employeeCrud.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => console.log(err))
})

router.put('./:id', validateDbId, (req,res) => {})

router.delete('./:id', validateDbId, (req,res) => {})

module.exports = router;
