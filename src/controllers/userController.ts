import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/authService';

class UserController {
  authService: AuthService;

  constructor () {
    this.authService = new AuthService();
  }

  public async Login (req: Request, res: Response) {
    const authService = new AuthService();
    const { email, password } = req.body;

    try {
      const { user, token } = await authService.Login(email, password)
      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  public async Signup (req: Request, res: Response) {
    const { email, password, name } = req.body;
    const authService = new AuthService();

    try {
      const { user, token } = await authService.SignUp(email, password, name);
      return res.status(200).send({ user, token });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.message);      
    }
  }
}

export default UserController