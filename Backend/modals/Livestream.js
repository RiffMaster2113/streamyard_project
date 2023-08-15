import mongoose from "mongoose";

const { Schema } = mongoose;

const LivestreamSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
    
  { timestamps: true }
);

export default mongoose.model("Livestream", LivestreamSchema);
