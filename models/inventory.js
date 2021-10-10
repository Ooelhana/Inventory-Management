const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    description: String,
    complete: Boolean,
})

module.exports.Inventory = mongoose.model('Inventory', inventorySchema);