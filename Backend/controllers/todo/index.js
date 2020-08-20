const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({ todos });
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}

const createTodo = async (req, res) => {
    try {
        const todoData = req.body.data;
        const newTodo = await Todo.create(todoData);
        res.status(200).json({ todo: newTodo });
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}

const updateTodo = async (req, res) => {
    try {
        const todoData = req.body.data;
        await Todo.updateOne({ _id: req.params.todoId }, todoData);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}

const deleteTodo = async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.todoId });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}
