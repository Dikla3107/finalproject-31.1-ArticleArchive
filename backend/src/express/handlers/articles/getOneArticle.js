const operations = require('../../../mongoose/controllers/articlesOperations');

async function getOneArticle(req, res){
const articleId = req.query._id;
if(!articleId)
return res.status(400).json('article is not exist');

const result = await operations.getOneArticle(req.userID, articleId);
res.json(result);

}
module.exports = getOneArticle; 