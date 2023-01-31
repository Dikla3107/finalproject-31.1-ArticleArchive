const operations = require('../../../mongoose/controllers/articlesOperations');


/** @type {import("express").RequestHandler} */
async function getOneArticle(req, res) {
    const articleId = req.query._id;
    if (!articleId) {
        return res.status(400).json('article Id not delivered');
    }
    (articleId, 'article id');
    const article = await operations.getOneArticle(articleId, req.body);
    res.json(article)
}



module.exports = getOneArticle;