import express from 'express'
import authController from '../controllers/authController.js'
import authMiddleware from '../middlewares/authMiddlewares.js'

const authRoutes = express.Router()




authRoutes.post('/register',authController.register)
authRoutes.post('/login',authController.login)
authRoutes.post('/logout',authController.logout)
authRoutes.post('/forgot',authController.forgotPassword)
authRoutes.post('/reset',authController.reset)


export default authRoutes