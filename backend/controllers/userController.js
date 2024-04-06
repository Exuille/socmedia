const User = require('../models/userModel')

const registerUser = async (req,res) => {
    const {firstName, middleName, lastName, emailAddress, username, password, confirmPassword} = req.body

    if(password != confirmPassword)
    {
        res.status(404).json({error: 'Incorrect password!'})
    }

    try{
        const user = await User.create({firstName, middleName, lastName, emailAddress, username, password})
        res.status(200).json(user)
    } catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

const loginUser = async (req, res) => {
    const {emailAddress, username, password} = req.body

    try{
        res.status(200).json(user)
    } catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    registerUser,
    loginUser
}