import mongoose from "mongoose";

class MasterModel {
  userSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, required: true },
    },
    { timestamps: true }
  );

  orderSchema = mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
      orderItems: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
        },
      ],
      shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },
      paymentMethod: { type: String, required: true },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
      taxPrice: { type: Number, required: true, default: 0.0 },
      shippingPrice: { type: Number, required: true, default: 0.0 },
      totalPrice: { type: Number, required: true, default: 0.0 },
      isPaid: { type: Boolean, required: true, default: false },
      isDelivered: { type: Boolean, required: true, default: false },
      paidAt: { type: Date },
      deliveredAt: { type: Date },
    },
    { timestamps: true }
  );

  reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
    { timestamps: true }
  );

  productSchema = mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
      name: { type: String, required: true },
      image: { type: String, required: true },
      brand: { type: String, required: true },
      category: { type: String, required: true },
      description: { type: String, required: true },
      reviews: [this.reviewSchema],
      rating: { type: Number, required: true, default: 0 },
      numReviews: { type: Number, required: true },
      price: { type: Number, required: true, default: 0 },
      countInStock: { type: Number, required: true, default: 0 },
    },
    { timestamps: true }
  );

  User = mongoose.model("User", this.userSchema);
  Product = mongoose.model("Product", this.productSchema);
  Order = mongoose.model("Order", this.orderSchema);
}

export default MasterModel;
