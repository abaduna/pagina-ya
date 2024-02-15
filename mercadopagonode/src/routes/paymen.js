import { Router } from "express";
import {createOrder}  from "../controlers/payment.controler.js";
import {reciveWebhook} from "../controlers/payment.controler.js";
const router = Router();

router.get("/create-orden", createOrder);

router.get("/sucess", (req, res) => {
  res.send("creatin order");
});

router.get("/failure", (req, res) => {
  res.send("failure");
});
router.get("/pending", (req, res) => {
  res.send("pending order");
});
router.get("/webhook",reciveWebhook);


export default router;
