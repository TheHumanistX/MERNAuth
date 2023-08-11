

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is required...'
            })
        }
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and must be at least 6 characters in length...'
            })
        }
    } catch (err) {
        
    }
}

module.exports = {
    test,
    registerUser,
}