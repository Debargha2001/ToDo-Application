const express = require('express');
const app = express();
const port = 8000;

// use express router
const db = require('./config/mongoose');
const Task = require('./models/task');
app.use('/',require('./routes'));
app.use(express.static('assets'));

// set up ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
})