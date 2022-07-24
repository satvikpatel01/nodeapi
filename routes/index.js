const express = require('express')
const router = express.Router()

const studentRoutes = require('./student')
const accountRoutes = require("./account");
const { ensureAuthorized } = require("../middlewares/auth");

router.use('/student', studentRoutes)
router.use("/account", ensureAuthorized, accountRoutes);

module.exports = router
