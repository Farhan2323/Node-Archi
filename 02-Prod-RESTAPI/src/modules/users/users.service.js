//Business Logic
const findAll = require('./users.repository').findAll;

async function getAllUsers() {
    return findAll();
}

module.exports = { getAllUsers };