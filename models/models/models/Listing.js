import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  plate: String,
  price: Number,
  seller: String,
  approved: { type: Boolean, default: false }
});

export default mongoose.model("Listing", ListingSchema);
