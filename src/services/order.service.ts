import { Response } from '../Interfaces';
import oderModel from '../models/order.model';

async function getOrders(): Promise<Response> {
  const result = await oderModel.getOrders();
  if (!result) return { type: null, message: 'Cannot get Orders' };
  return { type: null, message: result };
}

export default {
  getOrders,
};