//Database Queries
const pool = require('../../db');

async function findAll() {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
}

module.exports = { findAll };