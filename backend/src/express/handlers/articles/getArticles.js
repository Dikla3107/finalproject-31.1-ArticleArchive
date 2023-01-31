const operations = require('../../../mongoose/controllers/articlesOperations');


/** @type {import("express").RequestHandler} */
async function getAllArticles(req, res){
    const articles = await operations.getAllarticles();
    res.json(articles);
}

module.exports = getAllArticles;