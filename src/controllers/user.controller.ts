import { Request, Response } from 'express';
import userService from '../services/user.service';

async function createUser(req: Request, res: Response) {
  const { type, message } = await userService.createUser(req.body);
  if (type) return res.status(type).json(message);
  res.status(201).json({ token: message });
}

export default {
  createUser,
};