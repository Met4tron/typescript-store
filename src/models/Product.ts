import * as mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  remainingQuantity: {
    type: Number
  }
});

interface IProduct extends mongoose.Document {
  name: string,
  desc: string,
  price: string,
  remainingQuantity: number
}

const ProductModel = mongoose.model<IProduct>('Product', productSchema);

export {
  IProduct,
  ProductModel
}