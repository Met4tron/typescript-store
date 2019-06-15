import * as mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  quantity: Number,
  subtotal: String,
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  }
});

interface IOrderItem extends mongoose.Document {
  quantity: number,
  subtotal: string,
  product: string
}

const OrderItemModel = mongoose.model<IOrderItem>('OrderItem', OrderItemSchema);

export {
  OrderItemModel,
  IOrderItem
}