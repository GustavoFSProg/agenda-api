import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

dotenv.config()

const { PORT, DATABASE } = process.env

mongoose.connect(String(DATABASE))

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(` 💰 API Running on PORT: ${PORT}`)
})

export default app
