import express from 'express';
import InvoiceController from '../controllers/invoiceController';

const app = express();
const router = express.Router();

// Get all invoices
router.get('/getinvoices', InvoiceController.getInvoices);
router.post('/postinvoices', InvoiceController.saveInvoice);
router.put('/updateinvoices', InvoiceController.updateInvoice);
router.delete('/deleteinvoices', InvoiceController.deleteInvoice);

export default router;