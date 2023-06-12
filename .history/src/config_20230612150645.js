import { config } from "dotenv";
config();

export const PORT = 3000;
export const HOST = `http://localhost:${PORT}`;



export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;
// export const MERCADOPAGO_API_KEY = "TEST-770633538605644-061118-d0b215149c3a48a2a3d281536ddd1a34-1396390915"
