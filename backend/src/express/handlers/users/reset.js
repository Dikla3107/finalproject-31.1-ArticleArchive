const operations = require('../../../mongoose/controllers/usersOperations');

async function resetPassword(req, res) {
    const email = req.body;
    (email);
    const userFromDb = await operations.resetPassword(email);
    if (!userFromDb)
        return res.status(500).json('no user found');
    userFromDb.tempPassword = `Np${Math.round(Math.random() * 100000000)}@`;
    userFromDb.tempReset = true;
    const result = await operations.updateUserPass(userFromDb._id, userFromDb);
    return res.json(result);
}


module.exports = resetPassword;