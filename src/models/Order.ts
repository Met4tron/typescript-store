import * as mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  subtotal: String,
  status: String
});

interface IOrder extends mongoose.Document {
  subtotal: string,
  status: string
}

const OrderModel = mongoose.model<IOrder>('Order', OrderSchema);

export {
  OrderSchema,
  IOrder
}