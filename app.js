require ('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3200;
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const employeeRouter = require('./routes/employeeRouter');


// we need to configure our view engine ejs
app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //it has to do with request body from front end

//routes
app.use(employeeRouter);
app.get('/create', (req,res) => {
    res.status(200).render('create')
});


// console.log(process.env.MONGO_URI)
//db connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, 'localhost', ()=>{
        console.log(`listening on port ${PORT}..`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
