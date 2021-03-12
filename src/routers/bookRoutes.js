const bookRoutes = require('express').Router();
const booksControllers = require('../controllers/booksControllers');


bookRoutes.get('/',booksControllers.getBooks)
bookRoutes.post('/',booksControllers.addBooks)
bookRoutes.put('/:id', booksControllers.updateBooks)
bookRoutes.delete('/:id', booksControllers.deleteBooks)

module.exports = bookRoutes;