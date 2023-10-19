import express from 'express'
import * as authController from './controllers.js'

export const router = express.Router()

router.post('/login', authController.login)
router.get('/signup', authController.signup)
