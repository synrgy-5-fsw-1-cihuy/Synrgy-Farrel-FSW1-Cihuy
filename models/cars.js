const { Sequelize, NOW } = require("sequelize");
const db = require("../config/database");
const DataTypes = Sequelize;

const Cars = db.define(
  "cars_farrel",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ukuran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: NOW,
    },
  },
  { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" }
);

const carSynchro = async () => {
  await Cars.sync({ alter: true });
  console.log("Sync completed");
};

module.exports = { Cars, carSynchro };
