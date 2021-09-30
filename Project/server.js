const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const employeeRoutes =  require('./src/routes/employee.routes');
const authMiddleware = require('./src/middleware/auth.middleware');
console.log(authMiddleware);

const app = express();

const port = process.env.port || 8080;

app.use(bodyParser.urlencoded({extended : true }));

app.use(bodyParser.json());
app.use(authMiddleware);
app.listen(port, ()=>{
    console.log("hello world server is running on 8080");
});

app.get('/',(request, response)=> {
    response.send("Hello World");
});

// Use Implement the middleware for the module
app.use('/api/v1/employees', employeeRoutes)