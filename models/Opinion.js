import mongoose from "mongoose";

const OpinionSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    message: { type: String, required: true },
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.models.Opinion ||
  mongoose.model("Opinion", OpinionSchema);
