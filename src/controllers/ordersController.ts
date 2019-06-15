import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/ordersService';

class OrdersController {
  ordersService: OrdersService

  constructor () {
    this.ordersService = new OrdersService();
  }

  public async getOrders (req: Request, res: Response) {

  }

  public async getOrder (req: Request, res: Response) {

  }

  public async updateOrder (req: Request, res: Response) {

  }

  public async deleteOrder (req: Request, res: Response) {
    
  }
}