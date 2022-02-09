const mongoose = require("mongoose");
const userSignUpSchema = require("../model/userSignUpSchema");

mongoose.connect("mongodb://localhost:27017/airbnb", (error) => {
  if (error) {
    console.log("Database is not connected.");
  } else {
    console.log("Database is connected.");
  }
});

const userSignUpData = mongoose.model("customer", userSignUpSchema);

module.exports = { userSignUpData };
