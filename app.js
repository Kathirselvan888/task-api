const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const tasks = require('./routes/tasks')
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleWare = require('./middlewares/error-handler')

// Use CORS middleware
app.use(cors())

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleWare)

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
