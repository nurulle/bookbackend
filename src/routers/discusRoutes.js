const discusRouter = require('express').Router();
const discusControllers = require('../controllers/discusControllers');


discusRouter.get('/', discusControllers.getDiscus)
discusRouter.post('/', discusControllers.addDiscus)


module.exports = discusRouter;