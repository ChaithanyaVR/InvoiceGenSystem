import AlternatePayeeDetailsSchema from '@/models/AlternatePayeeDetailsSchema'
import connectMongoDB from '@/lib/mongo'


async function handler(req, res) {
      
      await connectMongoDB();
    if (req.method === 'POST') {
        try {
            const newAlternatePayee = new AlternatePayeeDetailsSchema(req.body);          
            await newAlternatePayee.save();          
            res.status(201).json({ message: 'Alternate payee created successfully', data: newAlternatePayee });
        } catch (error) {
            res.status(500).json({ message: 'Error creating alternate payee', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}

export default handler;