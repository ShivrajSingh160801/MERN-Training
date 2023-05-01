import express, { Router } from "express";
import OrderController from "../Controller/homedelivery";


const route = express.Router();

route.get('/getlookup',OrderController.getLookupOrders);
route.get('/getequalto',OrderController.getEqualto);
export default route;

