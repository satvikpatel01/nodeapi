const express = require('express')
const router = express.Router()

const studentRoutes = require('./student')
const accountRoutes = require("./account");
const productRoutes = require("./Product");
const userRoutes = require("./User");

const { ensureAuthorized } = require("../middlewares/auth");

router.use('/student', studentRoutes)
router.use('/Product', productRoutes)
router.use('/User', userRoutes)

router.use("/account", ensureAuthorized, accountRoutes);

module.exports = router
