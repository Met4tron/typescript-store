import * as argon2 from 'argon2';
import * as config from 'config';
import * as jwt from 'jsonwebtoken';
import { UserModel, IUser } from '../models/User';

class AuthService {
  public async SignUp (email: string, password: string, name: string, role: string = 'client'): Promise<any> {
    const passwordHashed = await argon2.hash(password);

    const userRecord = await UserModel.create({
      password: passwordHashed,
      email,
      name,
      role
    });

    return {
      user: {
        email: userRecord.email,
        name: userRecord.name,
        role: userRecord.role
      }
    }
  }

  public async Login(email: string, password: string): Promise<any> {
    const userRecord = await UserModel.findOne({ email });
    if (!userRecord) {
      throw new Error('User not found');
    } else {
      const correctPassword = await argon2.verify(userRecord.password, password);

      if (!correctPassword) {
        throw new Error('Incorrect Email/Password');
      }
    }

    return {
      user: {
        email: userRecord.email,
        name: userRecord.name,
      },
      token: this.generateToken(userRecord)
    }
  }

  private generateToken(user: IUser) {

    const data =  {
      _id: user._id,
      name: user.name,
      email: user.email
    };
    const signature: jwt.Secret = config.get('dev.JWT.SECRET');
    const expiration: string = config.get('dev.JWT.EXPIRES');

    return jwt.sign({ data, }, signature, { expiresIn: expiration });
  }
}

export default AuthService;