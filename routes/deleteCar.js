const express = require("express");
const router = express.Router();
const { Cars } = require("../models/cars");

router.use(express.json());

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const delCar = await Cars.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ delCar });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
