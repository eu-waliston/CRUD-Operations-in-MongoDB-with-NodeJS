const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Nationallity: { type: String, required: true },
  Personality: { type: [String], required: true },
  Habilities: { type: [String], required: true },
  Age: { type: Number, required: true },
  Status: { type: Boolean, required: true },
  Image: { type: String, required: true },
});

module.export = mongoose.model("user", UserSchema);
