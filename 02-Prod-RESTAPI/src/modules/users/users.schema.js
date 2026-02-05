const z = require('zod');
//User Schema
const createUserSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
}); 
module.exports = { createUserSchema };