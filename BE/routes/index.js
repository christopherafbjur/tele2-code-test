const express = require("express");
const router = express.Router();
const healthRoute = require("./health");
const gameRoute = require("./game");

router.use("/health", healthRoute);
router.use("/game", gameRoute);

module.exports = router;
