const ratingRouter = require('express').Router();
const ratingControllers = require('../controllers/ratingControllers');
const authMidleware = require('../helpers/authMidleware')


ratingRouter.get('/', ratingControllers.getRating);
ratingRouter.post('/', ratingControllers.addrating);

ratingRouter.get('/users', ratingControllers.getRatingusers)
ratingRouter.post('/users', authMidleware.checkLogin, ratingControllers.addratingUser);


module.exports = ratingRouter;