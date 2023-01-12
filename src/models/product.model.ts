import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../Interfaces/index';

async function createProduct(product: User): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [...Object.values(product)],
  );
  return insertId;
}

export default {
  createProduct,
};