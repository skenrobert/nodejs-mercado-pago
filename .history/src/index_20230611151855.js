import express from 'express'
import paymentRoutes from './routes/payment.js' //all modulo used .js is make for me

const app = express()

app.use(paymentRoutes);

app.listen(3000)
console.log('server on port', 3000)