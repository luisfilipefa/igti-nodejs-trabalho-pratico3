const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Owner = db.define(
  "owners",
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

module.exports = Owner;
