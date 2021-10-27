const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    description: String,
    complete: Boolean,
});

module.exports.Record = mongoose.model("Record", recordSchema);
