import { Router } from 'express';
import UserController from '../controllers/userController'

const routes = Router();
const userController = new UserController();

routes.post('/login', userController.Login)
routes.post('/signup', userController.Signup)