//require library
const mongoose = require('mongoose');

//This the Task Schema to store in DB
const taskSchema = new mongoose.Schema({
    task_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    }
});

//creating collection name
const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;