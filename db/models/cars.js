"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init(
    {
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      createdby: DataTypes.STRING,
      updatedby: DataTypes.STRING,
      deletedby: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cars",
      tableName: "cars",
      paranoid: true,
    }
  );
  return Cars;
};
