import { RowDataPacket } from 'mysql2';
import { Order } from '../Interfaces';
import connection from './connection';

async function getOrders(): Promise<Order[]> {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders o
      INNER JOIN Trybesmith.products p
      ON o.id = p.order_id
      GROUP BY o.id`,
  );
  return result as Order[];
}

export default {
  getOrders,
};