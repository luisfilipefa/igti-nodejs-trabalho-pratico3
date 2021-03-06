const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

module.exports = db;
