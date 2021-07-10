import express from 'express'
const app = express()
import routes from './routes/routes'

app.use('/', routes)
// port 
const port = 4000

app.get('/', (req, res) => {
    res.send(`<h1>Going Remote 2020 simulation server...`)
})

// server listen
app.listen(port, () => {
    console.log(`Going Remote server started ${port}`)
})

export default app
