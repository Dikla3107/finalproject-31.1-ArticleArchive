const articleOperations = require('../../../mongoose/controllers/articlesOperations')

async function getArticlesByUserId(req, res) {

    const userArticles = await articleOperations.getArticlesByUserId(req.userID);
    res.json(userArticles);
}

module.exports = getArticlesByUserId;