const Task = require('../models/task')
module.exports.home = function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(`Error in fetching tasks from db: ${err}`);
            return;
        }

        return res.render('home',{
            title: "To-Do Application",
            tasks_list: tasks
        })
    });
}

// controller for create tast
module.exports.createTask = function(req,res){
    Task.create(req.body,function(err,newTask){
        if(err){
            console.log(`Error in creating contact: ${err}`);
            return;
        }

        console.log(`New Task Created: ${newTask}`);
        return res.redirect('back');
    });
}