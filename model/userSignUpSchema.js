const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSignUpSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  account_open_date: { type: Date, default: Date.now() },
});

module.exports = userSignUpSchema;
