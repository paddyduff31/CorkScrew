const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
const todoRoutes = express.Router()
const PORT = process.env.PORT || 8080;

let Todo = require('./models/todo.model')

app.use(cors());
app.use(bodyParser.json());

// MongoDB setup 
mongoose.connect('mongodb+srv://paddy_duff:B1ll0fD!16@cluster0.gkkkt.mongodb.net/Cluster0?retryWrites=true&w=majority');
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB connection established successfully');
})


if(process.env.NODE_ENV ==='production') {
    app.use(express.static('client/build'));
}

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if(!todo) {
            res.status(404).send('data is not found');
        } else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated')
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
    }});
});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
});