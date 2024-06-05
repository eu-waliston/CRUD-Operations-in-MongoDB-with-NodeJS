const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Nationallity: { type: String, required: true },
  Personality: { type: [String], required: true },
  Habilities: { type: [String], required: true },
  Age: { type: Number, required: true },
  Status: { type: String, required: true },
  Image: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
