import InvoiceSchema from '@/models/InvoiceSchema'
import connectMongoDB from '@/lib/mongo'



async function handler(req, res) {
    await connectMongoDB();

    if (req.method === 'POST') {
        try {
            const invoice = new InvoiceSchema(req.body);
            await invoice.save();
            res.status(201).json({ message: 'Invoice created successfully', invoice });
        } catch (error) {
            console.error('Error creating invoice:', error);
            res.status(500).json({ error: 'Failed to create invoice', details: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}



export default handler;