const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  completed: {
      type: Boolean,
      required: true,
      default: false,
  }
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;