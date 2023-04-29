import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isVeg: {
      type: Boolean,
      required: true,
    },
    isContainsEgg: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      default: 100,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    addOns: [
      {
        type: mongoose.Types.ObjectId,
        ref: "foods",
      },
    ],
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "image",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
  },
  {
    timestamps: true,
  }
);

export const FoodModel = mongoose.model("foods", FoodSchema);
