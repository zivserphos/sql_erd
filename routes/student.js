const router = require("express")();
const { getStudentByID, addNewStudent } = require("../controllers/student");

router.get("/:id", getStudentByID);
router.post("/", addNewStudent);

module.exports = router;
