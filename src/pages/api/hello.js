import { query } from "@/lib/db"
import { connectMongoDB } from "@/lib/mongo"

export default async function handler(req,res){
    if(req.method==='GET'){
        const results = await query('SELECT * FROM Customer;', []);
        connectMongoDB();

        res.status(200).json({status: "Running", testsql : results})
    }
    
} 