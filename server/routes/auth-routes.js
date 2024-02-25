const express = require("express")
const router = express.Router();
const { register, login, userVerification } = require("../controllers/auth-controller"); // Updated import


router.post('/register', register)
router.post('/login', login)
router.post('/', userVerification)



module.exports = router