import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import colors from 'colors'
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js'

connectDB()

const app = express()

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on ${port}`.yellow.bold))
