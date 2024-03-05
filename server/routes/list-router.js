const express = require("express")
const router = express.Router();
const { addNewList } = require("../controllers/list-controller"); // Updated import


router.post('/addNewList', addNewList)

module.exports = router