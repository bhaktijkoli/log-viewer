require('dotenv').config()
const fs = require('fs')
const express = require('express')
const app = express()
const port = process.env.PORT
const logDir = process.env.LOG_DIR

app.get('/list', (_, res) => {
    const files = fs.readdirSync(logDir)
    res.status(200).json(files)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})