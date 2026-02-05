//Business Logic
const {findAll, create} = require('./users.repository');

async function getAllUsers() {
    return findAll();
}

async function createUser(user) {
    return create(user);
}
module.exports = { getAllUsers , createUser };