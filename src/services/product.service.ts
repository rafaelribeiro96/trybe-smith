import productModel from '../models/product.model';
import { Response, User } from '../Interfaces/index';

async function createProduct(product: User): Promise<Response> {
  const newProduct = await productModel.createProduct(product);

  return { type: null, message: { id: newProduct, ...product } };
}

export default {
  createProduct,
};