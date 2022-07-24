const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/get", (req, res) => {
  return UserController.User.get(req, res);
});
router.get("/get-User-by-id", (req, res) => {
  return UserController.User.getbyid(req, res);
});
router.post("/add", (req, res) => {
  return UserController.User.add(req, res);
});
router.post("/update", (req, res) => {
  return UserController.User.add(req, res);
});
router.delete("/delete", (req, res) => {
  return UserController.User.add(req, res);
});
module.exports = router;