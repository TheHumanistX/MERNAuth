const express = require('express');
const router = express.Router();
const cors = require('cors');
const { loginUser, registerUser, test } = require('../controllers/authController');

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

module.exports = router;