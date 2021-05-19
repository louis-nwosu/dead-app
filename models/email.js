const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("email", emailSchema);
