const operations = require('../../../mongoose/controllers/articlesOperations');

/** @type {import("express").RequestHandler} */
async function deleteOneArticle(req,res){

    const result = await operations.deleteArticle(req.params.id);

    if (result === null) {
        return res.status(500).json('could not delete')
    }
    return res.json(req.query.id + ' Deleted from DB');
}


module.exports = deleteOneArticle;