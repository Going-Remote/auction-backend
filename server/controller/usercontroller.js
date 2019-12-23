var data = [
    {id: 1, name: 'John Doe', email: 'johndoe@gmail.com', password: '12345'},
    {id: 2, name: 'Janet Doe', email: 'janetdoe@gmail.com', password: '123456'},
    {id: 3, name: 'Sam Doe', email: 'samdoe@gmail.com', password: '123457'},
]

exports.getAllUser = async (req, res) => {
    try {
        const info = await data.findAll({})
        return res.status(200).json({
            info: info
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        const { id } = req.params
        const info = await data.findOne({ where: {id: id }})
        return res.status(200).json({
            info: info
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const info = await data.findOne({ where: {id: id }})
        if(info) {
            return await data.destroy({ where: {id: id }})
        }
        return null
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


