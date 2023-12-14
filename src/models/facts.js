import mongoose, { Schema, models } from "mongoose";

const factsSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    facts: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Facts = models.Facts || mongoose.model("Facts", factsSchema);

export default Facts;
