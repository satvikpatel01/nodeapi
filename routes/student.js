const express = require("express");
const router = express.Router();

const studentController = require("../controllers/StudentController");

router.get("/get", (req, res) => {

  return studentController.student.get(req, res);
});
router.get("/get-student-by-id", (req, res) => {
  return studentController.student.getbyid(req, res);
});
router.post("/add", (req, res) => {
  return studentController.student.add(req, res);
});
router.post("/update", (req, res) => {
  return studentController.student.add(req, res);
});
router.delete("/delete", (req, res) => {
  return studentController.student.add(req, res);
});
module.exports = router;