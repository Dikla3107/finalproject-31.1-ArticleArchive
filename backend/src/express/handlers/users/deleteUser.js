const operations = require('../../../mongoose/controllers/usersOperations');

/** @type {import("express").RequestHandler} */
async function deleteOneUser(req,res){

    const result = await operations.deleteOneUser(req.params.id);
    if (result === null) {
        return res.status(500).json('could not delete user')
    }
    return res.json(req.query.id + ' Deleted from DB');
}


module.exports = deleteOneUser;