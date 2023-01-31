const express = require('express');
const router = express.Router();

const {
    getEmployees, 
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
} = require("../controller/employeeController")

router.route("/employees").get(getEmployees).post(createEmployee);

router.route('/employees/:id').get(getEmployee).patch(updateEmployee).delete(deleteEmployee);

module.exports = router
