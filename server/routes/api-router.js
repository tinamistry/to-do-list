const express = require('express');
const router = express.Router();
const authRouter = require('./auth-routes.js');
const todoRouter = require('./todo-routes.js')
const listRouter = require('./list-router.js')


router.use('/auth', authRouter);
router.use('/todo', todoRouter)
router.use('/list', listRouter)

module.exports = router;