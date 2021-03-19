const userRouter = require('express').Router();
const userControllers = require('../controllers/userControllers');
const authMidleware = require('../helpers/authMidleware')
const uploadMidleware = require('../helpers/uploadprofileMidleware')


userRouter.get('/', userControllers.getUser)
userRouter.post('/', uploadMidleware, userControllers.addUser)
userRouter.put('/users', authMidleware.checkLogin,uploadMidleware,userControllers.updateUserbyuser)
userRouter.put('/:id', userControllers.updateUser)
userRouter.delete('/:id', userControllers.deleteUser)


module.exports = userRouter;