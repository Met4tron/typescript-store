import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'util';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
});

UserSchema.pre('save', (next) => {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err: mongoose.Error, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
  
    });
  });
});

UserSchema.methods = {
  comparePassword(password: string) {
    let compare = promisify(bcrypt.compare)
    return compare(password, this.password);
  },
  createToken() {
    return jwt.sign({
      id: this._id,
      email: this.email
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
  }
}

export interface IUser extends mongoose.Document {
  email: string,
  password: string,
  name: string,
  role: string
}

export default mongoose.model<IUser>('User', UserSchema)