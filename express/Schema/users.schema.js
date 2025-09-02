const mongoose = require("mongoose");
const emergencyContactSchema = new mongoose.Schema({
  relation: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  emergencyContact: {
    type: emergencyContactSchema,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const userModel = mongoose.model("users", userSchema);

module.exports = {
  userModel,
};
