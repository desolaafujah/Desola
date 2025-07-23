const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

// home page
app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})