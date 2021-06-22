const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Owner = require("./owner.model");

const Pet = db.define(
  "pets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

Pet.belongsTo(Owner, { foreignKey: "owner_id" });

module.exports = Pet;
