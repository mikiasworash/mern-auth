import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`Server listening on ${port}`))
