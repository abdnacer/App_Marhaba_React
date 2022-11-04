const router = require('express').Router()

// controll Function
const { loginUser, registerUser } = require('../controllers/userController')

// login Route
router.post('/login', loginUser)

// Signup Route
router.post('/register', registerUser)

module.exports = router