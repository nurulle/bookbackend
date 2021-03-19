const bookRoutes = require('express').Router();
const booksControllers = require('../controllers/booksControllers');
// const { checkLogin } = require('../helpers/authMidleware');
const authMidleware = require('../helpers/authMidleware')
const uploadMidleware = require('../helpers/uploadMidleware')

bookRoutes.get('/',booksControllers.getBooks)
bookRoutes.post('/',booksControllers.addBooks)
bookRoutes.put('/:id', booksControllers.updateBooks)
bookRoutes.delete('/:id', booksControllers.deleteBooks)


bookRoutes.get('/users',authMidleware.checkLogin,booksControllers.getbooksUser)
bookRoutes.post('/users',authMidleware.checkLogin,uploadMidleware,booksControllers.createbooksUser)
bookRoutes.put('/users/:id',authMidleware.checkLogin,uploadMidleware,booksControllers.updatebooksUser)
bookRoutes.delete('/users/:id',authMidleware.checkLogin,booksControllers.deletebooksUser)


module.exports = bookRoutes;