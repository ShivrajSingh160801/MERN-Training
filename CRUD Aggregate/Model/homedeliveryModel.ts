import mongoose from "mongoose";

const homedeileverySchema = new mongoose.Schema({
    first_name : { type: String, required: true },
    email: { type: String, required: true },
    gender : { type: String, required: true },
    ordered_item : { type: String, required: true },
    address: { type: String , required: true }})

    export const homedeilevery = mongoose.model('homes', homedeileverySchema);