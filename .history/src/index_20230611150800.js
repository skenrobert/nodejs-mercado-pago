import express from 'express'
import second from './routes/payment.js'

const app = express()

app.listen(3000)
console.log('server on port', 3000)