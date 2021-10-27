var express = require("express");
var router = express.Router();

const { Record } = require("../models/record");

// Return all records
router.get("/", async (req, res, next) => {
    const records = await Record.find().catch(() => {
        console.log("error");
    });
    return res.send(records, 200);
});

// Only return specified record
router.get("/:id", async (req, res, next) => {
    const records = await Record.findById(req.params.id)
        .exec()
        .catch(() => {
            return 404;
        });

    return res.send(records, 200);
});

// Post a new record to the database
router.post("/", async (req, res, next) => {
    const newRecord = await new Record(req.body);
    newRecord.save();

    return res.json(newRecord, 201);
});

// Update the specified record in the database
router.put("/:id", (req, res, next) => {
    return res.send({ record: "put" }, 200);
});

// Patch the specified record in the database
router.patch("/:id", (req, res, next) => {
    return res.send({ record: "put" }, 200);
});

// Delete the specified record
router.delete("/:id", async (req, res, next) => {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);
    return res.json(deletedRecord, 200);
});

module.exports = router;
