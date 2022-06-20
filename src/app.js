import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/v1/index'
const app = express()

//logger
app.use(morgan())

// enable cors
app.use(cors())
app.options('*', cors())

// parse json request body
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/', router)

export default app;