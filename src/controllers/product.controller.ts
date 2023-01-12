import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const { type, message } = await productService.createProduct(req.body);
  if (type) return res.status(type).json(message);
  res.status(201).json(message);
}

export default {
  createProduct,
};