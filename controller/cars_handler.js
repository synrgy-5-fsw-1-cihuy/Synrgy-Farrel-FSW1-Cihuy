let Model;

const addCar = (req, res) => {
  if (req.user.role === "user") {
    return res.status(403).send("Forbidden Access! Not an admin!");
  }
};

const updateCar = (req, res) => {
  if (req.user.role === "user") {
    return res.status(403).send("Forbidden Access! Not an admin!");
  }
};

const deleteCar = (req, res) => {
  if (req.user.role === "user") {
    return res.status(403).send("Forbidden Access! Not an admin!");
  }
};

const getAllCar = (req, res) => {};

const getCarbyId = (req, res) => {};
