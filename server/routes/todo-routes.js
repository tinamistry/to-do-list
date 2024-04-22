const express = require("express")
const router = express.Router();
const { addToDo } = require("../controllers/todo-controller"); // Updated import


router.post('/addToDo', addToDo)

module.exports = router