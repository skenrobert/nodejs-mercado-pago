import express from 'express'
import payment from './routes/payment.js' //all modulo used .js is make for me

const app = express()

app.listen(3000)
console.log('server on port', 3000)