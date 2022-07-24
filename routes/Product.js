const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/get", (req, res) => {
  return ProductController.Product.get(req, res);
});
router.get("/get-Product-by-id", (req, res) => {
  return ProductController.Product.getbyid(req, res);
});
router.post("/add", (req, res) => {
  return ProductController.Product.add(req, res);
});
router.post("/update", (req, res) => {
  return ProductController.Product.add(req, res);
});
router.delete("/delete", (req, res) => {
  return ProductController.Product.add(req, res);
});
module.exports = router;