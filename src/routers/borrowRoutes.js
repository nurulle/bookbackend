const borrowRoutes = require('express').Router();
const borrowControllers = require('../controllers/borrowControllers');

borrowRoutes.get('/', borrowControllers.getBorrow)
borrowRoutes.post('/', borrowControllers.addBorrow)


module.exports = borrowRoutes;