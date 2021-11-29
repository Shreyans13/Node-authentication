const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, default: null, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpiry: { type: Date },
});

module.exports = mongoose.model("user", userSchema);
