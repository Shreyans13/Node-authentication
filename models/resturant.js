const mongoose = require("mongoose");

let resturantSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  rating: { type: String },
  type: { type: String },
  time: { type: String },
  rate: { type: String },
  imgSrc: { type: String },
  location: { type: String, lowercase: true },
  location_string: { type: String },
});

resturantSchema.methods.removeFields = function () {
  let obj = this.toObject();
  const { __v, _id, ...updatedObject } = obj;
  return updatedObject;
};

module.exports = mongoose.model("Resturant", resturantSchema);

// name: "Yogesh`s Cafe",
//       rating: "4.5",
//       type: "North Crusines",
//       time: "10:00am",
//       rate: "75",
//       id: "123",
//       imgSrc:
//         "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
