import express, { Request, Response } from 'express';
const app = express();
import bodyParser from 'body-parser';

app.use(bodyParser.json());

class CustomerController {
getCustomers(req: Request, res: Response): any {
    console.log("Get Customers");
    res.send("Shivraj is Here");
    return "Get Customers";
  }

  saveCustomer(req: Request, res: Response): any {
    console.log("Save Customer");
    return res.send( req.body);
  }

  updateCustomer(req: Request, res: Response): any {
    console.log("Update Customer");
    // console.log(req.params.customerId);
    console.log(req.body);
    return req.body;
  }

  deleteCustomer(req: Request, res: Response): any {
    console.log("Delete Customer");
    // console.log(req.params.customerId);
    return "Customer deleted";
  }
}

export default new CustomerController();