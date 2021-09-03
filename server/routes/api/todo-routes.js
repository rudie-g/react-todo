const router = require('express').Router();
const { getAllTodo } = require('../../controllers/todo-controller');

router.route('/').get(getAllTodo);

module.exports = router;
