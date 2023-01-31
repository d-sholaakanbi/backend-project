const mongoose = require('mongoose')
const Schema = mongoose.Schema
// name, roles, level, age 
// timestamp - createdAt, updatedAt
const employeeSchema = new Schema({
name: {
    type: 'string',
    required: true,
},
role:{
    type: 'string',
    required: true,
},
age: {
    type: 'number',
    required: true,
},

},{timestamps:true}
);

module.exports = mongoose.model('Employee',employeeSchema)

