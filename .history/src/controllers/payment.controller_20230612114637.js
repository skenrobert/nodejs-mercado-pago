import mercadopago from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";



export const createOrder = async (req, res) => {
  var mercadopago = require('mercadopago');
  mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY,
  });

  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: "Laptop",
          unit_price: 500,
          currency_id: "PEN",
          quantity: 1,
        },
      ],
      // notification_url: "https://e720-190-237-16-208.sa.ngrok.io/webhook",
      // back_urls: {
      //   success: "http://localhost:4000/success",
      //   // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
      //   // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
      // },
    });

    console.log(result);

    // res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// export const receiveWebhook = async (req, res) => {
//   try {
//     const payment = req.query;
//     console.log(payment);
//     if (payment.type === "payment") {
//       const data = await mercadopago.payment.findById(payment["data.id"]);
//       console.log(data);
//     }

//     res.sendStatus(204);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };

export const cancelPayment = (req, res) =>{
  res.send("cancel")
  // res.redirect("/");
} ;