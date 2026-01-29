const pool = require('./db');

async function createTable() {
    try {
        const query = `
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username TEXT,
                password TEXT
            );
        `;
        await pool.query(query);
        console.log("✅ Table 'users' created successfully!");
    } catch (error) {
        console.error("❌ Error creating table:", error);
    } finally {
        pool.end(); 
    }
}

createTable();