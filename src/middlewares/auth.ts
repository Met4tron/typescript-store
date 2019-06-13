import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader: string = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Token not provided' });
  }

  const parts: string[] = authHeader.split(' ');

  if (parts.length != 2) {
    return res.status(401).send({ message: 'Token message' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'Token malformatted' });
  }

  let secret: string = process.env.JWT_SECRET;

  jwt.verify(token, secret, (err, decoded: string) => {
    if (err) return res.status(401).send({ message: 'Token invalid' });
    req.userId = decoded.id;
    return next();
  });
}

