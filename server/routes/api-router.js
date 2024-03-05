const express = require('express');
const router = express.Router();
const authRouter = require('./auth-routes.js');
const todoRouter = require('./todo-routes.js')


router.use('/auth', authRouter);
router.use('/todo', todoRouter)

module.exports = router;