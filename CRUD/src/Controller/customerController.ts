import express, { Request, Response } from "express";
import {customerDetails} from "../Model/customer";

const app = express();

class CustomerController {
  async getCustomers(req: Request, res: Response) {
    try {
      const customers = await customerDetails.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async createCustomer(req: Request, res: Response) {
    try {
      const newCustomer = new customerDetails(req.body);
      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateCustomer(req: Request, res: Response) {
    try {
      const updatedCustomer = await customerDetails.findByIdAndUpdate(
        req.params.id ,
        req.body,
        { new: true }
      );
      if (!updatedCustomer) {
        res.status(404).json({ message: "Customer not found" });
      } else {
        res.status(200).json(updatedCustomer);
      }
    } catch (error : any) {
      res.status(500).send(error);
    }
  }

  async deleteCustomer(req: Request, res: Response){
    try {
      const deletedCustomer = await customerDetails.findByIdAndDelete(req.params.id);
      if (!deletedCustomer) {
        res.status(404).json({ message: "Customer not found" });
      } else {
        res.send("Delete Successfull")
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new CustomerController();
