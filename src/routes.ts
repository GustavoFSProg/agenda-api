import { Router } from 'express'
import userController from './controllers/userController'

const routes = Router()

routes.get('/', userController.getAll)
routes.post('/register', userController.register)
routes.post('/login', userController.login)

export default routes
