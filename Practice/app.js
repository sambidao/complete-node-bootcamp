const express = require('express')
const fs = require('fs')
const app = express()
const port = 8080

const tours = fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        tours: tours
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})