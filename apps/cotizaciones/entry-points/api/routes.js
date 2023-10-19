// apps/component-a/entry-points/api/routes.js
import { Router } from 'express'
import { getUsers } from './controllers.js'

const router = Router()

router.get('/users', getUsers)


export default router
