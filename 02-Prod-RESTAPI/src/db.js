const { Pool } = require('pg');
require('dotenv').config(); // Load variables from .env file

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use the variable from .env
});

module.exports = pool;