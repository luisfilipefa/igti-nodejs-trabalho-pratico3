const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Owner = require("./owner.model");
const Pet = require("./pet.model");

const Service = db.define(
  "services",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  { underscored: true }
);

Service.belongsTo(Pet, { foreignKey: "pet_id" });
Service.belongsTo(Owner, { foreignKey: "owner_id" });

module.exports = Service;
