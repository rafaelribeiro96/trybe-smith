import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getOrders(_req: Request, res: Response) {
  const { type, message } = await orderService.getOrders();
  if (type) return res.status(type).json(message);
  res.status(200).json(message);
}

export default {
  getOrders,
};