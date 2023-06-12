import { Router } from "express";
import {
  createOrder,
  // receiveWebhook,
  cancelPayment,
} from "../controllers/payment.controller.js";

const router = Router();

router.get("/", (req, res) => res.send('hi'));

router.post("/create-order", createOrder);
router.get("/cancel", (req, res) => res.send('hiddd'));

// router.post("/webhook", receiveWebhook);

// router.get("/success", (req, res) => res.send("Success"));

export default router;