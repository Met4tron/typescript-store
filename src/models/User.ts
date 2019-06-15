import * as mongoose from 'mongoose';

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

interface IUser extends mongoose.Document {
  email: string,
  password: string,
  name: string,
  role: string
}
const UserModel = mongoose.model<IUser>('User', UserSchema);

export {
  UserModel,
  IUser
}