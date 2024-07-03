import mysql from 'mysql2/promise'

let pool;

if (!pool) {
    pool = mysql.createPool({
        host: 'localhost',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}



export async function query(query, values = []) {

    let connection;

    try {
        connection = await pool.getConnection();
        console.log('Connected to MySQL');
        console.log('Request received', values)
        const [results] = await connection.execute(query, values);
        return results;
    } catch (error) {
        throw Error(error.message);
        return error;
    } finally {
        if (connection) connection.release();
    }
}