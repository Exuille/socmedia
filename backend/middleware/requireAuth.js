const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const requireAuth = async (req, res, next) => {

    const { authorization } = req.headers

    if(!authorization) {
        return res(404).json({msg : "Auth required!"})
    }

    const token = authorization.split(' ')[1]

    try{
        const {id} = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(404).json({msg : "Request is not authorized"})
    }
}

module.exports = requireAuth