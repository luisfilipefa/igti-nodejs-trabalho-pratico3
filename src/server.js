require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const ownerRouter = require("./routes/owner.routes");
const petRouter = require("./routes/pet.routes");

const port = process.env.PORT || 3000;

const app = express();

// Express middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routers
app.use("/owner", ownerRouter);
app.use("/pet", petRouter);

// Error middleware
app.use((err, _req, res, _next) => {
  res.status(err.status).json({ error: true, message: err.message });
});

app.listen(port, () => console.log(`listening on port ${port}`));
