import mongoose from "mongoose";

const dineout = new mongoose.Schema({}, { strict: false });

export const dineoutModel = mongoose.model('dineouts', dineout);