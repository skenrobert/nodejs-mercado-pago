import mercadopage from "mercadopago";
import { MERCADOPAGO_API_KEY, HOST } from "../config.js";

export const createOrder = async (req, res) => {
  mercadopage.configure({
    access_token: MERCADOPAGO_API_KEY,
  });

  try {
    const result = await mercadopage.preferences.create({
      items: [
        {
          title: "Laptop",
          unit_price: 500,
          currency_id: "USD",
          quantity: 1,
        },
      ],
      notification_url: "https://e329-186-81-100-36.ngrok.io/webhook",
      back_urls: {
        // success: "http://localhost:3000/success",
        success: `${HOST}/success`,
        failure: `${HOST}/failure`,//no create
        pending: `${HOST}/pending`,
        // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
        // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
      },
    });

    console.log(result);

    // res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {

    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    console.log(payment);
    if (payment.type === "payment") {
      const data = await mercadopage.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
