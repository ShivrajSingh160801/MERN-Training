import express from 'express';
import invoiceController from '../controllers/invoiceController';

const router = express.Router();
router.get('/getcustomers',invoiceController.getInvoices);
router.post('/postcustomers',invoiceController.saveInvoice);
router.put('/updatecustomers',invoiceController.updateInvoice);
router.delete('/deletecustomers',invoiceController.deleteInvoice);

export default router;

