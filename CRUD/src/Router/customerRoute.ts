import express from "express";
import customerRoute from "../Controller/customerController";
import bp from "body-parser"


const router = express.Router();
router.get('/getCustomers', customerRoute.getCustomers );
router.post('/postCustomers', customerRoute.createCustomer );
router.put('/updatecustomers/:id', customerRoute.updateCustomer);
router.delete('/deletecustomers/:id', customerRoute.deleteCustomer);
export default router;
