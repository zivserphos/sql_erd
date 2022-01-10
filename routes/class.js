const express = require("express");
const {
  getClassById,
  addNewClass,
  updateClassId,
} = require("../controllers/class");

const router = express.Router();

router.get("/:id", getClassById);
router.post("/:id", addNewClass);
router.put("/:prev_id/:new_id", updateClassId);

module.exports = router;
