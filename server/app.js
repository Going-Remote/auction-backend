import express from 'express'
const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send(`<h1>Going Remote 2020 simulation server...`)
})

app.listen(port, () => {
    console.log(`Going Remote server started ${port}`)
})