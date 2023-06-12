import { Router } from "express";
import {
  createOrder,
  // receiveWebhook,
  cancelPayment,
} from "../controllers/payment.controller.js";

const router = Router();

router.get("/", (req, res) => res.send('hi'));

router.get("/create-order", createOrder); //only test for get
router.post("/create-order", createOrder);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

export default router;