const express = require('express')
const app = express()
require('dotenv').config()
require('./config/db')
require('./models')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4444

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRouter = require('./routes/userRouter')
const roleRouter = require('./routes/roleRouter')

app.use('/api/auth', userRouter)
app.use('/api/user', roleRouter)
app.all('*', (req, res) => {
  res.send('Page not found')
})

app.listen(port, () => console.log(`server is running on port ${port}`))
