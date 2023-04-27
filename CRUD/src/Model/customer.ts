import mongoose from "mongoose";

const schema = new mongoose.Schema({
    customer_id: { type: String, required: true },
    customer_first_name: { type: String, required: true },
    customer_last_name: { type: String, required: true },
    customer_phone_num: { type: Number, required: true },
    customer_rating: { type: Number , required: true }
  });
  

const customerDetails = mongoose.model('customerdetails',schema);

// const customerDetails = mongoose.model('customerdetails', {}, 'customerdetails', { strict: false });


export default customerDetails;