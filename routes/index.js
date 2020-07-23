const express = require("express");
const router = express.Router();

const cats = require("./cats");

router.use("/cats", cats);

module.exports = router;
