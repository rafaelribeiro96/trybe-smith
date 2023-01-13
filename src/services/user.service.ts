import jwt, { SignOptions } from 'jsonwebtoken';
import userModel from '../models/user.model';
import { User, Response } from '../Interfaces';

const secret = process.env.JWT_SECRET || 'secret';
const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

const createToken = (result: number, user: User) => {
  const payload = { id: result, username: user.username };
  const token = jwt.sign({ payload }, secret, jwtConfig as SignOptions);
  return token;
};

async function createUser(user: User): Promise<Response> {
  const newUser = await userModel.createUser(user);
  return { type: null, message: createToken(newUser, user) };
}

export default {
  createUser,
};