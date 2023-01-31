const articlesModel = require('../models/articlesModel');


async function createArticleInMongoDb(articleDetails) {
    try {
        const dataArticleCreatedinDb = await new articlesModel(articleDetails).save();
        return dataArticleCreatedinDb;
    } catch {
        return ('can not create article');
    }
}


async function getAllarticles(){
    try{
        const allArticles = await articlesModel.find();
        return allArticles;
    }catch{
        return ('no articles to show');
    }
}


async function getOneArticle(id, articleData) {
    try {
        (id, articleData, 'id+article get one article');
        const article = await articlesModel.findById(id, articleData);
        return article;
    }
    catch {
        return null;
    }
}

async function getOneByUserIDAndarticleID(userId, articleId) {
    try {
        const oneArticle = await articlesModel.findOne({
            userId: userId,
            _id: articleId
        });
        return oneArticle;
    }
    catch {
        return null
    }
}

async function getArticlesByUserId(userId) {

    try {
        const userArticles = await articlesModel.find({ userId: userId });
        return userArticles;
    } catch {
        return ('No Articles found for thit user');
    }
}


async function deleteArticle(articleId, userId) {

    try {
        const result = await articlesModel.findByIdAndDelete({
            _id: articleId,
            userId: userId
        });
        return result;
    } catch {
        return null;
    }
}

async function updateArticle(cardId, userId, articleData) {
    try {
        (cardId, userId, articleData);
        const updatedArticle = await articlesModel.findByIdAndUpdate({ _id: cardId, userId: userId }, articleData);
        (updatedArticle);
        return updatedArticle;
    }
    catch
    {
        return null;
    }
}

module.exports =  {
    createArticleInMongoDb,
    getAllarticles,
    deleteArticle,
    updateArticle,
    getArticlesByUserId,
    getOneByUserIDAndarticleID,
    getOneArticle
};

