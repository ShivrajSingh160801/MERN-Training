import express , {Request,Response} from "express";
import { homedeilevery } from "../Model/homedeliveryModel";
import {responsemodel} from '../Model/responsemodel'

const app = express();

class OrderController {
    async getLookupOrders(req: Request, res: Response) {
      try {
        const customers = await homedeilevery.aggregate([
            {
                $lookup: {
                    from: "dineouts",
                    localField: "ordered_item",
                    foreignField: "ordered_item",
                    as: "frequent"
                }
            }
        ]);
        const response = new responsemodel();
        response.status = 200;
        response.data = customers;
        response.message = "Customers retrieved successfully";
        res.json(customers);
      } catch (error) {
        const response = new responsemodel();
        response.status = 500;
        response.data = null;
        response.message = "An error occurred while retrieving customers";
        res.json();
      }
    }


    async getEqualto(req: Request, res: Response) {
      try {
        const customers = await homedeilevery.find({ ordered_item : { $eq: "Wine - Red, Metus Rose" } });
        const response = new responsemodel();
        response.status = 200;
        response.data = customers;
        response.message = "Customers retrieved successfully";
        res.json(customers);
      } catch (error) {
        const response = new responsemodel();
        response.status = 500;
        response.data = null;
        response.message = "An error occurred while retrieving customers";
        res.json();
      }
    }
  }

  export default new OrderController();