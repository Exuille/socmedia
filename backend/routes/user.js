const express = require('express')
const { } = require('../userController')
const router = express.Router()

router.get('/', () => {})

router.post('/signup', registerUser)

router.post('/login', loginUser)


module.exports = router