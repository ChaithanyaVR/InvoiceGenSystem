import mongoose from "mongoose";

const invoiceProductSchema = new mongoose.Schema({
    InvoiceProductID: { type: Number, required: true, unique: true },
    InvoiceID: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true }, 
    ProductID: { type: mongoose.Schema.Types.ObjectId, required: true }, 
    Quantity: { type: Number, required: true },
    Price: { type: mongoose.Schema.Types.Decimal128 },
    TaxAmt: { type: mongoose.Schema.Types.Decimal128 }
});

const InvoiceProductSchema = mongoose.model('InvoiceProduct', invoiceProductSchema);

export default InvoiceProductSchema;
