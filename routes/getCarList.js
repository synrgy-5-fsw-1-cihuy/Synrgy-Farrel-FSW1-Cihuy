const express = require("express");
const router = express.Router();
const { Cars } = require("../models/cars");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    res.status(200).json(await Cars.findAll());
  } catch (error) {
    res.status(400);
  }
});

module.exports = router;
