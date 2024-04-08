const express = require('express')
const { getPost, uploadPost } = require('../controllers/postController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

router.use(requireAuth)

router.get('/', getPost)

router.post('/upload', uploadPost)

module.exports = router