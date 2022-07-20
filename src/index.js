require('dotenv').config()
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT
const logDir = process.env.LOG_DIR

app.get('/list', (_, res) => {
    const files = fs.readdirSync(logDir)
    res.status(200).json(files)
})

app.get('/view/:file', (req, res) => {
    const file = req.params.file
    const filePath = path.join(logDir, file)
    if (fs.existsSync(filePath) === false) {
        res.sendStatus(404)
        return
    }
    res.sendFile(filePath)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})