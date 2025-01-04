const mongoose = require("mongoose");

const barrelSchema = new mongoose.Schema({
  barrel1: { type: String, required: true },
  barrel1A: { type: String, required: true },
  barrel2: { type: String, required: true },
  barrel3: { type: String, required: true },
  barrel4: { type: String, required: true },
  serialNumber: { type: String, required: true },
  finalOutput: { type: String, required: true, unique: true },
});

const Barrel = mongoose.model("Barrel", barrelSchema);

module.exports = Barrel;