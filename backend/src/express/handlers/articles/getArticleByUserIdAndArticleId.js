const operations = require('../../../mongoose/controllers/articlesOperations');

async function getOneByUserIDAndarticleID(req, res) {
    (req.query._id);

    const articleId = req.query._id;
    if (!articleId)
        return res.status(400).json('article Id not exist');

    const result = await operations.getOneByUserIDAndarticleID(req.userID, articleId);
    res.json(result);
}

module.exports = getOneByUserIDAndarticleID;
