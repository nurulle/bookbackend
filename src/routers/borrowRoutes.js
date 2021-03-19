const borrowRoutes = require('express').Router();
const borrowControllers = require('../controllers/borrowControllers');
const authMidleware = require('../helpers/authMidleware')


borrowRoutes.get('/', borrowControllers.getBorrow)
borrowRoutes.post('/', borrowControllers.addBorrow)

borrowRoutes.get('/users', borrowControllers.getBorrowuser),
borrowRoutes.post('/users', authMidleware.checkLogin, borrowControllers.addBorrowuser)

module.exports = borrowRoutes;