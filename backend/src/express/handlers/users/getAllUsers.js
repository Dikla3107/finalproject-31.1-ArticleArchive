const operations = require('../../../mongoose/controllers/usersOperations');

/** @type {import("express").RequestHandler} */
async function getAllUsers(req, res){
    const users = await operations.getAllUsers();
    res.json(users);
}


module.exports = getAllUsers;