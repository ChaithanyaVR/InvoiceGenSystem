import mongoose from "mongoose";

const taxDetailsSchema = new mongoose.Schema({
    TaxID: { type: Number, required: true, unique: true },
    InvoiceID: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true }, 
    TaxType: { type: String, maxlength: 50 },
    TaxRate: { type: mongoose.Schema.Types.Decimal128 },
    TaxAmount: { type: mongoose.Schema.Types.Decimal128 }
});

const TaxDetailsSchema = mongoose.model('TaxDetails', taxDetailsSchema);

export default TaxDetailsSchema;