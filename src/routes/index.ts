import { Router } from 'express';
import auth from './auth';
import category from './category';

const routes = Router();

routes.use('/auth', auth);
routes.use('/categories', category);

export default routes;