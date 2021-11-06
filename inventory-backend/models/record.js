const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    name: String,   
    employee: String,
    quantity: Number,
});

module.exports.Record = mongoose.model("Record", recordSchema);
