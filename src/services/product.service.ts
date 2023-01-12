import productModel from '../models/product.model';
import { Response, User } from '../Interfaces/index';

async function getAllProducts(): Promise<Response> {
  const result = await productModel.getAllProducts();
  if (!result) return { type: null, message: 'Cannot get Products' };
  return { type: null, message: result };
}

async function createProduct(product: User): Promise<Response> {
  const newProduct = await productModel.createProduct(product);
  return { type: null, message: { id: newProduct, ...product } };
}

export default {
  createProduct,
  getAllProducts,
};