import { Request, Response, NextFunction } from 'express';
import CategoryService from '../services/categoryService';

class CategoryController {
  categoryService: CategoryService

  constructor () {
    this.categoryService = new CategoryService();
  }

  public async getCategories (req: Request, res: Response) {

  }

  public async getCategory (req: Request, res: Response) {

  }

  public async updateCategory (req: Request, res: Response) {

  }

  public async deleteCategory (req: Request, res: Response) {
    
  }
}