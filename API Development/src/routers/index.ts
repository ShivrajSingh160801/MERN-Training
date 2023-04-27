import express from 'express';
import InvoiceRoute from '../routers/invoiceRoute'
import CustomerRoute from '../routers/customerRoute'

const router = express.Router();

router.use('/invoice',InvoiceRoute);
router.use('/customer',CustomerRoute);

export default router;