//Handles Request/Response
const userService = require('../users/users.service');
const { createUserSchema } = require('./users.schema');

async function getAllUsers(req, res, next) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const validationResult = createUserSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                error: 'Validation Failed',
                details: validationResult.error.errors
            });
        }

        const newUser = await userService.createUser(validationResult.data);
        res.status(201).json(newUser);

    } catch (error) {
        
        next(error);
    }
}

module.exports = { getAllUsers, createUser };