

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = (req, res) => {
    try {
        const { name, email, password } = req.body;
    } catch (err) {
        
    }
}

module.exports = {
    test,
    registerUser,
}