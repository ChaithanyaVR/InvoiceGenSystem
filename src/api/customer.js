import { query } from '@/lib/db'; 



export default async function handleCreateCustomer(req, res, next) {
    if (req.method === 'POST') {
        const { CustomerName, ContactInfo} = req.body;

        // Validate required fields
        if (!CustomerName || !ContactInfo) {
            return res.status(400).json({ error: 'CustomerName, and ContactInfo are required fields' });
        } 
        console.log('customer-param',req.body);

        const sql = 'INSERT INTO Customer (CustomerName, ContactInfo) VALUES(?, ?);'
        const values = [ 
            CustomerName, 
            ContactInfo, 
        ];
        await query(sql, values);
        res.status(200).json('Customer added')
        
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

