const { Todo } = require('../models');

module.exports = {
  async getAllTodo(req, res) {
    const allTodo = await Todo.find({});

    if (!allTodo) {
      return res.status(400).json({ message: 'No todos found' });
    }
    res.status(200).json(allTodo);
  },
  async completeTodo(req, res) {
    const updateTodo = await Todo.findOneAndUpdate(
      { name: req.body.name },
      { completed: true },
    );

    if (!updateTodo) {
      return res.status(400).json({ message: 'Unable to update' });
    }

    res.status(200).json(updateTodo);
  },
  async incompleteTodo(req, res) {
    const updateTodo = await Todo.findOneAndUpdate(
      { name: req.body.name },
      { completed: false },
    );

    if (!updateTodo) {
      return res.status(400).json({ message: 'Unable to update' });
    }

    res.status(200).json(updateTodo);
  },
  async deleteTodo(req, res) {
      await Todo.deleteOne(
          { name: req.body.name },
      )
  }
};