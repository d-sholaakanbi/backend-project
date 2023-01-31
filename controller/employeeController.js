const Employees = require('../models/employees');




// get all employees - /employees
const getEmployees = (req, res) => {
    Employees.find().then((data)=>{
        // res.status(201).json({data});
        res.status(200).render("index", {employees: data});

    })
    .catch((err)=> console.log(err));

};


// get single employee /employees/:id req-params
 const getEmployee = (req, res) => {
     const {id} = req.params;
     Employees.findById({_id: id}).then((data) => {
            //  res.status(201).json({data});
            res.status(200).render("details", {employee: data});

     })
    .catch((err) => console.log(err));

 }

 const createEmployee = (req, res) => {
    const {name, role, age} = req.body
    const employee = new Employees(req.body)
    employee.save().then ((data) => {
        // res.status(200).json ({msg: "Employees created successfully", data});
        // res.status(200).render("create",{create: data});
        res.redirect("/employees");
    })
    .catch((err) => {
        console.log(err);
    });
};

//update an employee - url - /employees:id
const updateEmployee = (req, res) => {
    const {id} = req.params;
    //req.body
    Employees.findByIdAndUpdate({_id: id}, req.body, {new: true, runValidators: true,
    })
       .then((data) => {
        res.status (200).json({msg: "employees updated successfully", data});
       })
       .catch((err) =>{console.log(err);})
    
};

// delete an employee /employees/:id - params 
//findbyIdanddelete
const deleteEmployee = (req, res) => {
    const {id} = req.params;
    Employees.findByIdAndDelete({_id: id}).then((data) => {
        res.status(201).json({redirect: '/employees'});
    })
    .catch((err) => {
        console.log(err);
    });


};

module.exports = {
    getEmployees, 
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
};