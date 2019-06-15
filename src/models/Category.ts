import * as mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  desc: String
});

interface ICategory extends mongoose.Document {
  name: string,
  desc: string
}

const CategoryModel = mongoose.model<ICategory>('Category', categorySchema);

export {
  CategoryModel,
  ICategory
}