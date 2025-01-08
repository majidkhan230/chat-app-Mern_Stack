import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    profilePic: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
