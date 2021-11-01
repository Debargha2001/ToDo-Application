const Task = require('../models/task')
const Contact = require('../models/task')
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