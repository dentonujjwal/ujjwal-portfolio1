const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

async function initDB() {
    try {
        // Create connection without selecting database first
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD
        });

        console.log('Connected to MySQL server.');

        const schemaPath = path.join(__dirname, 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        // Split queries by semicolon (simple split, assuming no semicolons in strings for this simple schema)
        const queries = schema.split(';').filter(query => query.trim().length > 0);

        for (const query of queries) {
            await connection.query(query);
            console.log('Executed query successfully.');
        }

        console.log('Database and tables initialized successfully.');
        await connection.end();
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

initDB();
