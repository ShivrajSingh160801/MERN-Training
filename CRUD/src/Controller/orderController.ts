import express, { Request, Response } from "express";
import {orderDetails} from "../Model/customer";
import {responsemodel} from '../Model/responseModel'

const app = express();

let Response = new responsemodel();
class orderController {
  async getOrder(req:Request , res:Response) {
  const orders = await orderDetails.find;

    }

}