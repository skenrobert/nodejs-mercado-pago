import express from 'express';
import morgan from 'morgan';
import paymentRoutes from './routes/payment.js'; //all modulo used .js is make for me
import { PORT } from './routes/config.js';

const app = express();
app.use(morgan(‘dev’));

app.use(paymentRoutes);

app.listen(3000);
console.log('server on port', 3000);