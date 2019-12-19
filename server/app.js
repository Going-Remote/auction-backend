import express from 'express'
//setting up express middleware
const app = express()

// port 
const port = 4000

// get route
app.get('/', (req, res) => {
    res.send(`<h1>Going Remote 2020 simulation server...`)
})

// server listen
app.listen(port, () => {
    console.log(`Going Remote server started ${port}`)
})