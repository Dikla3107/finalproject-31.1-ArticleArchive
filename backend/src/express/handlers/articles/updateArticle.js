const operations = require('../../../mongoose/controllers/articlesOperations');

/** @type {import("express").RequestHandler} */
async function updateAritcle(req,res){

const articleID = req.query._id;
    const userID = req.articleID
    (req.body);

    if (!articleID) {
        return res.status(400).json('Id not supported')
    }
    req.body.updatedtedAt = new Date().toLocaleString();
    const result = await operations.updateArticle(articleID, userID, req.body);
    if (result !== null) {
        return res.json('article updated successfully')
    }
    return res.status(500).json('fail to update');
}


module.exports = updateAritcle;