const express = require("express");
const { getClassById, addNewClass } = require("../controllers/class");

const router = express.Router();

router.get("/:id", getClassById);
router.post("/:id", addNewClass);

module.exports = router;
