import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../Interfaces/index';

const getAllProducts = async () => {
  const [data] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return data;
};

async function createProduct(product: User): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [...Object.values(product)],
  );
  return insertId;
}

export default {
  createProduct,
  getAllProducts,
};
