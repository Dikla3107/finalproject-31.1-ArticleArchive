const operations = require('../../../mongoose/controllers/usersOperations');
const validateSignInUser = require('../../../joi/validationSignIn');
const jsonwebtoken = require('jsonwebtoken');
const authenticateUser = require('../../middlewares/authenticateUser');

async function signInUser(req, res) {
    ('im signin user');
    const { error } = validateSignInUser(req.body);
    (error, 'signin user backend');
    if (error)
        return res.status(401).json(error.details[0].message);
    const { email, password } = req.body;
    const userFromDb = await operations.signInUser(email, password);
    if (!userFromDb)
        return res.status(500).json('no user found');
    const token = jsonwebtoken.sign({ userid: userFromDb._id }, 'webToken');
    (token, 'this is token');
    return res.json({
        token,
        user: userFromDb
    });
}
    function signInStatus(req, res) {

    if (authenticateUser) {
        res.send({
            status: 'success',
            
        });
    } else {
        res.send({
            status: 'error'
        })
    }
} 

module.exports = {signInUser, signInStatus};