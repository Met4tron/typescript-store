import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/authService';

class UserController {
  authService: AuthService;

  constructor () {
    this.authService = new AuthService();
  }

  public async Login (req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const { user, token } = await this.authService.Login(email, password)
      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async Signup (req: Request, res: Response) {
    const { email, password, name } = req.body;
    
    try {
      const { user, token } = await this.authService.SignUp(email, password, name);
    } catch (error) {
      return res.status(500).json(error);      
    }
  }
}

export default UserController