const mainRoutes = require('express').Router();


const bookRoutes = require('./bookRoutes');
const borrowRoutes = require('./borrowRoutes');

const categoryRouter = require('./categoryRoutes')


mainRoutes.use('/books', bookRoutes);
mainRoutes.use('/category', categoryRouter);
mainRoutes.use('/borrow', borrowRoutes);

module.exports = mainRoutes;