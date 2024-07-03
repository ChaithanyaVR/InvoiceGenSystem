import mongoose from "mongoose";

const alternatePayeeSchema = new mongoose.Schema({
    PayeeID: { type: Number, required: true, unique: true },
    AlternatePayee1: { type: String, maxlength: 100 },
    AlternatePayee2: { type: String, maxlength: 100 },
    City: { type: String, maxlength: 50 },
    Street: { type: String, maxlength: 100 },
    Country: { type: String, maxlength: 50 },
    BankKey: { type: String, maxlength: 20 },
    BankAccNo: { type: String, maxlength: 20 },
    Reference: { type: String, maxlength: 100 },
    InvoiceID: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true } 
});

const AlternatePayeeDetailsSchema = mongoose.model('AlternatePayeeDetails', alternatePayeeSchema);

export default AlternatePayeeDetailsSchema;
