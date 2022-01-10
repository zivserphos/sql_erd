const router = require("express")();
const {
  getStudentByID,
  addNewStudent,
  removeStudent,
} = require("../controllers/student");

router.get("/:id", getStudentByID);
router.post("/", addNewStudent);
router.delete("/:id", removeStudent);

module.exports = router;
