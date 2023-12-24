const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.route('/').get((req, res) => {
  res.json({ message: "Server is running", "docs": "https://documenter.getpostman.com/view/22926184/2s9Ykrcfb4" })
})
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})