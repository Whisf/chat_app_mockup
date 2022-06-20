import express from 'express'
import userController from '../../controllers/user.controller'

const router = express.Router()


router
   .route('/')
   .post(userController.createUser)

router
   .route('/:id')
   .patch(userController.updateUser)
   .delete(userController.deleteUser)
export default router