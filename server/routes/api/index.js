const router = require('express').Router();

const todoRoutes = require('./todo-routes.js');

router.use('/todos', todoRoutes);

module.exports = router;