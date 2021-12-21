const express = require("express");

const hewanRoutes = require("./hewan");

const router = express.Router();

router.use("/hewan", hewanRoutes);

module.exports = router;
