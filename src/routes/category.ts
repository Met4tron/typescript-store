import { Router } from 'express';
import CategoryController from '../controllers/categoryController';

const categoryController = new CategoryController();
const routes = Router();

routes.get('/', categoryController.getCategories);
routes.get('/:id', categoryController.getCategory);
routes.put('/:id', categoryController.updateCategory);
routes.delete('/:id', categoryController.deleteCategory);

export default routes;