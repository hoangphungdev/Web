require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')


// config template engine
configViewEngine(app)

const port = process.env.PORT || 3000

// khai báo route
app.use('/', webRoutes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
