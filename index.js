const express = require('express');
const path = require('path');
const port = 8000;

//DataBase connect
const db = require('./config/mongoose');
const Tasks = require('./models/tasks');

const app = express();

//View engine 'EJS' setup
app.set('view engine', 'ejs');
//looking into views folder in the current directory
app.set('views', path.join(__dirname, 'views'));
//encoding form data
app.use(express.urlencoded());
//Using assets folder for static files
app.use(express.static('assets'));

//display home page of App
app.get('/', function(req, res){

    Tasks.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching Data');
            return;
        }
        return res.render('home', {
            title: 'To Do App',
            task_list: tasks
        });
    });
});

//creating task in DB
app.post('/create-task', function(req, res){
    Tasks.create({
        task_name: req.body.task,
        category: req.body.category,
        due_date: req.body.dueDate
    }, function(err, newTask){
        if(err){
            console.log('error in creating contact!');
            return;
        }
        return res.redirect('back');
    });
});

//Deleting task in DB
app.get('/delete-task', function(req, res){
    //get the id from query in the url
    let id = req.query.id;

    //find the task in the database using id
    Tasks.findByIdAndDelete(id, function(err){
        if(err){
            console.log(`Error in deleting Data ${err}`);
            return;
        }
        return res.redirect('back');
    });
});

//Server starts
app.listen(port, function(err){
    if(err){
        console.log(`Error Occured: ${err}`);
    }
    console.log(`Express Server is up at: ${port}`);
})