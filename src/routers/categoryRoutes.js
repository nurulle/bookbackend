const categoryRouter = require('express').Router();
const categoryControllers = require('../controllers/categoryControllers');
const uploadMidleware = require('../helpers/uploadKategoriMidleware')



categoryRouter.get('/', categoryControllers.getCategory)
categoryRouter.post('/', uploadMidleware, categoryControllers.addcategory)


categoryRouter.put('/:id', uploadMidleware, categoryControllers.updateCategory)
categoryRouter.delete('/:id', categoryControllers.deleteCategory)


module.exports = categoryRouter;