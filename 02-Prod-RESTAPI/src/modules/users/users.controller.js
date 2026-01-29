//Handles Request/Response
const userService = require('../users/users.service').getAllUsers;

async function getAllUsers(req, res) {
    try {
        const users = await userService();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getAllUsers };