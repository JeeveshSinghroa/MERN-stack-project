var mongoose = require('mongoose');

//Genre Schema
var taskSchema = mongoose.Schema({
    id:{
        type: String,
        //required: true
    },
    title:{
        type: String,
        //required: true
    }
});

//defining model here and assigning to Task.
var Task = module.exports = mongoose.model('Task',taskSchema);

//Get Task
module.exports.getTask = (callback,limit) =>{
    Task.find(callback).limit(limit);
}

//Add Task
module.exports.addTask = (task, callback) =>{
    Task.create(task,callback);
}

//Update Task
module.exports.updateTask = (id, task, options, callback) =>{
    var query = {_id:id};
    var update = {
        title: task.task
    }
    Task.findOneAndUpdate(query,update,options,callback);
}

//Delete Task
module.exports.removeTask = (id, callback) =>{
    var query = {_id:id};
    Task.remove(query,callback);
}