import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    customer_id: { type: String, required: true },
    customer_first_name: { type: String, required: true },
    customer_last_name: { type: String, required: true },
    customer_phone_num: { type: Number, required: true },
    customer_rating: { type: Number , required: true }
});

const orderSchema = new mongoose.Schema({}, { strict: false });

export const customerDetails = mongoose.model('customerdetails', customerSchema);

export const orderDetails = mongoose.model('orderdetails', orderSchema);


