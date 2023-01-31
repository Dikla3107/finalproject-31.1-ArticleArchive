const userModel = require('../models/usersModel');
const bcryptjs = require('bcryptjs');


async function getAllUsers(){
try{
        const allUsers = await userModel.find();
        return allUsers;
    }catch{
        return ('no users to show');
    }
}


async function createAUserInMongoDb(userDetails) {
    try {
        (userDetails);
        userDetails.password = bcryptjs.hashSync(userDetails.password);
        userDetails.passwordConfirmation = bcryptjs.hashSync(userDetails.passwordConfirmation);
        const dataUserCreatedinDb = await new userModel(userDetails).save();
        return dataUserCreatedinDb;
    } catch (e) {
        return (e, 'can not create user');
    }
}

async function resetPassword(email) {
    try {
        (email, "@@@");
        userFromDb = await userModel.findOne(email);
        (userFromDb, '!!!');
        if (!userFromDb)
            return null;

        (userFromDb, '???');
        return userFromDb;
    } catch {
        return ('error occurred');
    }
}

async function findOneUser(id) {
    try {
        const user = await userModel.findById(id);
        return user;
    }
    catch {
        return null;
    }
}

async function deleteOneUser(id){
    try{
        const deleteUser = await userModel.deleteOne({
            _id: id
        });
        (deleteUser, 'deleted user');

        return deleteUser;
    }catch{
        return null;
    }
}


async function updateUser(id, userData) {
    try {

        userData.password = bcryptjs.hashSync(userData.password);
        userData.passwordConfirmation = bcryptjs.hashSync(userData.passwordConfirmation);

        const updatedUser = await userModel.findByIdAndUpdate({ _id: id }, userData);
        return updatedUser;
    }
    catch
    {
        return null;
    }
}

async function signInUser(email, password) {
    try {
        userFromDb = await userModel.findOne({ email: email });
        (userFromDb);
        if (!userFromDb)
            return null;
            const result = Promise.resolve(bcryptjs.compare(password, userFromDb.password));
        if (result)
            return userFromDb;
        return null
    } catch {
        return ('error occurred');
    }
}

async function getOneUser(id) {
    try {
        const user = await userModel.findById(id);
        return user;
    }
    catch {
        return null;
    }
}
async function updateUserPass(id, userData) {
    try {
        const updatedUser = await userModel.findByIdAndUpdate({ _id: id }, userData);
        return updatedUser;
    }
    catch
    {
        return null;
    }
}


module.exports = {getAllUsers, createAUserInMongoDb, findOneUser, deleteOneUser, updateUser, signInUser,getOneUser, resetPassword, updateUserPass}