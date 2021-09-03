const router = require('express').Router();

const todoRoutes = require('./todo-routes.js');

router.use('/todo', todoRoutes);

module.exports = router;