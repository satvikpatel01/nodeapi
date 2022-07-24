const express = require("express");
const router = express.Router();

const accountController = require("../controllers/AccountController");

router.post("/login", (req, res) => {
  return accountController.account.login(req, res);
});

// router.post("/token-login", (req, res) => {
//    return accountController.account.login(req, res);
//  });

router.post("/registration", (req, res) => {
  return accountController.account.register(req, res);
});

module.exports = router;