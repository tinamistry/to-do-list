const express = require("express")
const router = express.Router();

//import a controller
const {getTest} = require("../controllers/test");

//import any middlewares


//api routes
router.get("/test", getTest)


module.exports = router