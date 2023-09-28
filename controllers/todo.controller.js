const Todo = require("../models/todo.model")

exports.getTodos = async(req, res) => {
    const result = await Todo.find();
    res.send(result);
}

exports.saveATodo = async(req, res) => {
    const result = await Todo.create(req.body);
    res.status(200).json({message: 'todo save successfull', todo: result});
}

exports.updateTodo = async(req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await Todo.updateOne({_id : id}, updateData)
    res.send(result)
}

exports.deleteATodo = async(req, res) => {
    const id = req.params.id;
    const result = await Todo.deleteOne({_id : id});
    res.send(result);
}