import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    images: [
      {
        location: {
          type: String,
          required: true,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

export default ImageModel = mongoose.model("images", ImageSchema);
