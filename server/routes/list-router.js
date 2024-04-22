const express = require("express")
const router = express.Router();
const { addNewList, getListNames, getListItems } = require("../controllers/list-controller"); // Updated import


router.post('/addNewList', addNewList)
router.get('/getListNames/:userId', getListNames)
router.get('/getListItems/:listName', getListItems)

module.exports = router