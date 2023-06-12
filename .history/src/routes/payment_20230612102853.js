import { Router } from "express";
import {
  createOrder,
  // receiveWebhook,
  cancelPayment,
} from "../controllers/paymentcontroller.js";

const router = Router();

router.get("/", (req, res) => res.send('hi'));

router.post("/create-order", createOrder);
router.post("/cancel", cancelPayment);

// router.post("/webhook", receiveWebhook);

// router.get("/success", (req, res) => res.send("Success"));

export default router;