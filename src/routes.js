import {Router} from 'express';
import UserController from '../controllers/UserController'

const connection = require('../src/database/connection');

const routes = new Router();

routes.get('/user', UserController.index)
routes.post('/user', UserController.create)
routes.delete('/user', UserController.delete)

export default routes;