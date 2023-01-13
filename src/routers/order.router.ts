import express from 'express';
import orderController from '../controllers/order.controller';

const router = express.Router();

router.get('/', orderController.getOrders);

export default router;