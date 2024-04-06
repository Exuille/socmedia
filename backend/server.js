require('dotenv.config')

const express = require('express')
const userRoutes = require('./routes/user')

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('api/user', userRoutes)

app.listen(process.env.PORT, () => {
    console.log('Running on ', process.env.PORT)
})