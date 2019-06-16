import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserModel, IUser } from '../models/User';

class AuthService {
  public async SignUp (email: string, password: string, name: string, role: string = 'client'): Promise<any> {
    
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      throw new Error('Email already exist');
    }

    const passwordHashed = bcrypt.hashSync(password, 10);

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
      const correctPassword = bcrypt.compareSync(password, userRecord.password);
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
      email: user.email,
      role: user.role
    };

    const signature: jwt.Secret = process.env.JWT_SECRET;
    const expiration: string = process.env.JWT_EXPIRES;

    return jwt.sign({ data, }, signature, { expiresIn: expiration });
  }
}

export default AuthService;