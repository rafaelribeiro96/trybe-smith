import { RowDataPacket } from 'mysql2';
import { Order } from '../Interfaces';
import connection from './connection';

async function getOrders(): Promise<Order[]> {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.orders AS orders 
      INNER JOIN Trybesmith.products AS products 
      ON products.order_id = orders.id 
      GROUP BY orders.id;`,
  );
  return result as Order[];
}

export default {
  getOrders,
};