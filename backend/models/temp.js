const mongoose = require("mongoose");

const SwapSchema = new mongoose.Schema({ 
  student: String,
  currentClass: String,
  requestedClass: String,
  status: { type: String, default:'pending'}
});
Swap=mongoose.model("Swap", SwapSchema);
module.exports = Swap