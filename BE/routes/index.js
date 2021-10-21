const express = require("express");
const router = express.Router();
const healthRoute = require("./health");
const calculationRoute = require("./calc");

router.use("/health", healthRoute);
router.use("/calc", calculationRoute);

module.exports = router;
