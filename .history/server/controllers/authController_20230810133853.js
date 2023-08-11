const User = require('../models/user');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is required...'
            })
        }
        // Check if password is entered and at least 6 characters in length
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and must be at least 6 characters in length...'
            })
        }
        // Check if email was entered and is valid
        const exist = await User.findOne({ email })
        if (!email) {
            return res.json({
                error: ''
            })
        }
    } catch (err) {
        
    }
}

module.exports = {
    test,
    registerUser,
}