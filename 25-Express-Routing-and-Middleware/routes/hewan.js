const express = require("express");

const HewanController = require("../controllers/hewan.controller");

const router = express.Router();

const postChecker = (req, res, next) => {
  const valid = ["kucing", "anjing", "kelinci"];
  const spesies = req.body.spesies;

  if (valid.includes(spesies)) {
    next();
  } else {
    res.status(400).json({ error: "Spesies not valid" });
  }
};

router.get("/", HewanController.getAllHewan);
router.get("/:id", HewanController.getHewanById);
router.post("/", postChecker, HewanController.createNewHewan);
router.patch("/:id", HewanController.updateHewan);
router.delete("/:id", HewanController.deleteHewan);

module.exports = router;
