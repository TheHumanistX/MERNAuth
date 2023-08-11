const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {hashPassword, comparePassword }= require('../helpers/auth')

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
        if (exist) {
            return res.json({
                error: 'E-Mail is already taken...'
            })
        } else if (!email) {
            return res.json({
                error: 'Email is required...'
            })
        }
        console.log('password: ', password, '... creating `hashedPassword` next...')
        const hashedPassword = await hashPassword(password)
        console.log('hashedPassword created... :', hashedPassword)
        // Create user in database
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        })
        console.log('user: ', user)
        return res.json(user)
    } catch (err) {
        console.log('Error in registration: ', err.message)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Login end point
const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;

        // Check if user/email exists
        const user = await User.findOne ({ email })
        if (!user) {
            return res.json({
                error: 'Email/User does not exist in our system...'
            })
        }

        // Check if passwords match
        const passwordMatch = await comparePassword(password, user.password)

        if (passwordMatch) {
            return res.json('Passwords match!')
            jwt.sign({
                email: user.email,
                id: user._id,
                user.name
            })
        }

        if (!passwordMatch) {
            return res.json({
                error: 'Password is incorrect...'
            })
        }

    } catch (err) {
        console.error('Error in login: ', err)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
}