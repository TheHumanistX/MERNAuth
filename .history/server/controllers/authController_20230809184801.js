

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
    } catch (err) {
        
    }
}

module.exports = {
    test,
    registerUser,
}