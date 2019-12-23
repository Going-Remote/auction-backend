var data = [
    {id: 1, name: 'John Doe', email: 'johndoe@gmail.com', password: '12345'},
    {id: 2, name: 'Janet Doe', email: 'janetdoe@gmail.com', password: '123456'},
    {id: 3, name: 'Sam Doe', email: 'samdoe@gmail.com', password: '123457'},
]

exports.getAllUsers = async (req, res) => {
    try {
        return data
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        return data
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        return data
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


