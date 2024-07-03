import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
    Currency: { type: String, maxlength: 10 },
    InvBasicAmt: { type: mongoose.Schema.Types.Decimal128 },
    InvTaxAmt: { type: mongoose.Schema.Types.Decimal128 },
    TotalInvAmt: { type: mongoose.Schema.Types.Decimal128 },
    AdvancePaid: { type: mongoose.Schema.Types.Decimal128 },
    TCSApplicable: { type: Boolean },
    NextPayableAmt: { type: mongoose.Schema.Types.Decimal128 },
    CustomerID: { type: Number},
    ProductID: { type: Number}, 
    DateIssued: { type: Date, default: Date.now }
});

const InvoiceSchema = mongoose.models.InvoiceSchema || mongoose.model('Invoice', invoiceSchema);

export default InvoiceSchema;
