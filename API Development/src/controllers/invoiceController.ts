import express, { Request, Response } from 'express';
import {responseModel} from '../models/responseModel';
import Invest from './Investment.json'
import { InvestmentRoot, Root } from '../../Interface/demoInterface';



class InvoiceController {
  public getInvoices(req: Request, res: Response): any {
    let response = new responseModel();
    try {
      // const investmentData  = Invest as InvestmentRoot; Last Update -- Continue From Here
      response.status = 200;
      response.message = "Got It SuccessFully";
      // response.data = investmentData;  
    } catch (ex:any) {
      response.status = 400;
      response.message = ex.message;
    }
    res.send(response);
  }
  
    public saveInvoice(req: Request, res: Response): any {
        console.log("Save Invoice");
        console.log(req.body);
        return res.send(req.body);
      }
      
    public updateInvoice(req: Request, res: Response): any {
      console.log("Update Invoice");
      console.log(req.params.invoiceId);
      console.log(req.body);
      return req.body;
    }
  
    public deleteInvoice(req: Request, res: Response): any {
      console.log("Delete Invoice");
      console.log(req.params.invoiceId);
      return "Invoice deleted";
    }
  }
  
  export default new InvoiceController();