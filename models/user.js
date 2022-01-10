const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: { type: String, default: null, required: true, unique: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpiry: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
