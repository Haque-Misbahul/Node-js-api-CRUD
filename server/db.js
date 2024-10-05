const mongoose = require('mongoose');


const dbUri = 'mongodb+srv://admin:1234@cluster0.1cqas.mongodb.net/employee_db?retryWrites=true&w=majority&appName=Cluster0';


module.exports = () => {
    return mongoose.connect(dbUri);
}