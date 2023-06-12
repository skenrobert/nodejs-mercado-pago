import { Router } from "express";
import {
  createOrder,
  // receiveWebhook,
} from "../controllers/paymentController.js";

const router = Router();

router.get("/", (req, res) => res.send('hi'));

router.post("/create-order", createOrder);

// router.post("/webhook", receiveWebhook);

// router.get("/success", (req, res) => res.send("Success"));

export default router;