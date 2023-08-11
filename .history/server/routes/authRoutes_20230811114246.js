const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getProfile, loginUser, registerUser, test } = require('../controllers/authController');

// middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)


router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router;