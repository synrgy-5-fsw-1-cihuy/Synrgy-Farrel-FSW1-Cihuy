const express = require("express");
const PORT = 8000 || process.env.PORT;
const app = express();

const getDaftarMobil = require("./routes/getCarList");
const postNewCar = require("./routes/postNewCar");
const deleteCar = require("./routes/deleteCar");
const updateCar = require("./routes/updateCar");
const tes = require("./routes/tes");
const db = require("./config/database");

const { carSynchro } = require("./models/cars");

const auth = async () => {
  try {
    await db.authenticate();
    console.log("DB successfully connected");
  } catch (error) {
    console.log(error);
  }
};

auth();
carSynchro();
app.use("/getCar", getDaftarMobil);

app.use("/postCar", postNewCar);

app.use("/deleteCar", deleteCar);

app.use("/updateCar", updateCar);

// app.use("/tes", tes);

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
