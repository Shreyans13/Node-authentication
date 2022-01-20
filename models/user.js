const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: {
    type: String,
    unique: true,
    default: null,
    required: true,
    unique: true,
  },
  address: { type: String },
  city: { type: String },
  password: { type: String },
  token: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpiry: { type: Date },
});

userSchema.methods.removeFields = function () {
  let obj = this.toObject();
  const {
    password,
    token,
    resetPasswordExpiry,
    resetPasswordToken,
    __v,
    _id,
    ...updatedObject
  } = obj;
  return updatedObject;
};

module.exports = mongoose.model("User", userSchema);
