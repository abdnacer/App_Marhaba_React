require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// routes
// app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.URL, () => console.log('connect database'))

app.listen(port, () => console.log(`server is running on ${port}`))