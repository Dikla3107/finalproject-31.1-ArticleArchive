const mongoose = require('mongoose');
const articlesSchema = mongoose.Schema({
    articleTitle: String,
    articleSubTitle: String,
    createdAt: Date,
    articleCategory: String,
    author: String,
    body: String,


})



const articlesModel = mongoose.model('article', articlesSchema);

module.exports = articlesModel;


