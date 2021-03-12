const ratingRouter = require('express').Router();
const ratingControllers = require('../controllers/ratingControllers');


ratingRouter.get('/', ratingControllers.getRating)
ratingRouter.post('/', ratingControllers.addrating);


module.exports = ratingRouter;