const express = require('express');
const todoController = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', todoController.getTodos)
router.post('/', todoController.saveATodo)
router.patch('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteATodo)

module.exports = router;