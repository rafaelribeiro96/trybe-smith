import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../Interfaces';

async function createUser(user: User): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (${Object.keys(user)}) VALUE (?, ?, ?, ?)`,
    [...Object.values(user)],
  );
  return insertId;
}

export default {
  createUser,
};