import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    PaymentID: { type: Number, required: true, unique: true },
    InvoiceID: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true }, 
    PaymentDate: { type: Date },
    Amount: { type: mongoose.Schema.Types.Decimal128 },
    PaymentMethod: { type: String, maxlength: 50 }
});

const PaymentSchema = mongoose.model('Payment', paymentSchema);

export default PaymentSchema;