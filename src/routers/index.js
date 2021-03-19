const mainRoutes = require('express').Router();

const authRoutes = require('./authRouters');
const bookRoutes = require('./bookRoutes');
const borrowRoutes = require('./borrowRoutes');
const categoryRouter = require('./categoryRoutes')
const discusRouter = require('./discusRoutes')
const ratingRouter = require('./ratingRoutes');
const userRouter = require('./userRoutes')


mainRoutes.use('/auth', authRoutes);
mainRoutes.use('/books', bookRoutes);
mainRoutes.use('/category', categoryRouter);
mainRoutes.use('/borrow', borrowRoutes);
mainRoutes.use('/discus', discusRouter);
mainRoutes.use('/rating', ratingRouter);
mainRoutes.use('/user', userRouter);

module.exports = mainRoutes;