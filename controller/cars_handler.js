const model = require("../db/models/index");
const Cars = model.car;

const addCar = async (req, res) => {
  if (req.user.role === "user") {
    return res.status(403).send("Forbidden Access! Not an admin!");
  }
  const data = req.body;
  const { ...body } = data;
  try {
    await Cars.create({
      // brand: data.brand,
      // model: data.model,
      // year: data.year,
      ...body,
      createdby: req.user.email,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCar = async (req, res) => {
  if (req.user.role === "user") {
    return res.status(403).send("Forbidden Access! Not an admin!");
  }
  const data = req.body;
  const { ...body } = data;
  console.log(req.params);
  try {
    await Cars.update(
      {
        ...body,
        updatedby: req.user.email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(204).send(`Data with id : ${req.params.id} has been updated`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCar = async (req, res) => {
  if (req.user.role === "user") {
    return res.status(403).send("Forbidden Access! Not an admin!");
  }
  try {
    await Cars.update(
      { deletedby: req.user.email },
      { where: { id: req.params.id } }
    );
    await Cars.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(202).send(`Data with id : ${req.params.id} has been deleted`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllCar = async (req, res) => {
  try {
    res.status(200).json(await Cars.findAll());
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCarbyId = async (req, res) => {
  try {
    res.status(200).json(
      await Cars.findOne({
        where: {
          id: req.params.id,
        },
      })
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addCar, deleteCar, updateCar, getAllCar, getCarbyId };
