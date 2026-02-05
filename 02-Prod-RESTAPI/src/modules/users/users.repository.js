//Database Queries
const pool = require('../../db');

async function findAll() {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
}

async function create(user) {
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
    const values = [user.username, user.password];
    
    const res = await pool.query(query, values);
    return res.rows[0]; // Return the single user we just created
}

module.exports = { findAll, create };