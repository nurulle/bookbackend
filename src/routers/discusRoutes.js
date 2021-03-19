const discusRouter = require('express').Router();
const discusControllers = require('../controllers/discusControllers');
const authMidleware = require('../helpers/authMidleware')


discusRouter.get('/', discusControllers.getDiscus)
discusRouter.post('/', discusControllers.addDiscus)


discusRouter.get('/users', discusControllers.getDiscus)
discusRouter.post('/users', authMidleware.checkLogin, discusControllers.addDiscusUser)


module.exports = discusRouter;