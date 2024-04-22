const express = require("express")
const router = express.Router();
const { addNewList, getListNames } = require("../controllers/list-controller"); // Updated import


router.post('/addNewList', addNewList)
router.get('/getListNames/:userId', getListNames)

module.exports = router