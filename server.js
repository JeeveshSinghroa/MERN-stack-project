var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Task = require('./Models/task');

//Connect to Mongoose.
mongoose.connect('mongodb://localhost/task');
var db = mongoose.connection;

app.get('/api/todos',(req, res)=>{
    Task.getTask((err, task)=>{
        if(err){
            throw err;
        }
        res.json(task);
    });
});

app.post('/api/todos',(req, res)=>{
    //console.log(req);
    var task = req.body;
    //console.log(task);
    Task.addTask(task,(err, task)=>{
        if(err){
            throw err;
        }
        res.json(task);
    });
});
app.listen(5000,()=>{
    console.log(`Server started on port: 5000`);
});