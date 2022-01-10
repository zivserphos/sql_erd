const express = require("express");
const getTeacherByID = require("../controllers/teacher");

const router = express();

router.get("/:id", getTeacherByID);

module.exports = router;
