const operations = require('../../../mongoose/controllers/adminOperations');
const validateNewAdmin = require('../../../joi/validateRegister')

/** @type {import("express").RequestHandler} */
async function createAdmin(req, res) {

    const { error } = validateNewAdmin(req.body);
    (req.body, 'create user function req.body');

    if (error)
        return res.status(400).json(error.details[0].message);

    req.body.createdAt = new Date().toLocaleString();
    const userFromDb = await operations.createAdminInMongoDb(req.body)
    (userFromDb, 'userFromDb before status500');
    if (!userFromDb) {
        return res.status(500).json("General error. user not saved")
    }
    res.json(userFromDb)
}

module.exports = createAdmin;