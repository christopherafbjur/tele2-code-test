const express = require("express");
const validation = require('../middleware/validation/game')
const controller = require('../controllers/game');

const router = express.Router();


router.post("/", validation, controller);

module.exports = router;
