const express = require('express');
const todoController = require('../../controllers/todo');

const router = express.Router();

router.get('', todoController.getTodos);

router.post('', todoController.createTodo);

router.put('/:todoId', todoController.updateTodo);

router.delete('/:todoId', todoController.deleteTodo)

module.exports = router;
