const categoryRouter = require('express').Router();
const categoryControllers = require('../controllers/categoryControllers');


categoryRouter.get('/', categoryControllers.getCategory)
categoryRouter.post('/', categoryControllers.addcategory)
categoryRouter.put('/:id', categoryControllers.updateCategory)
categoryRouter.delete('/:id', categoryControllers.deleteCategory)



module.exports = categoryRouter;