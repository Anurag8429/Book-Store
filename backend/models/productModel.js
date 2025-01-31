import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }, 
  popular: { type: Boolean, default: false }, 
});

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

export default productModel;
