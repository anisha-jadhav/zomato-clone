import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    food: { type: mongoose.Types.ObjectId, ref: "foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    ratings: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isRestaurantReview: Boolean,
    isFoodReview: Boolean,
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
  },
  {
    timestamps: true,
  }
);

export default ReviewModel = mongoose.model("reviews", ReviewSchema);
