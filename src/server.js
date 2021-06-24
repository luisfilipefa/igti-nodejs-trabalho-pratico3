require("dotenv").config();
require("./config/mongo")();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const ownerRouter = require("./routes/owner.routes");
const petRouter = require("./routes/pet.routes");
const serviceRouter = require("./routes/service.routes");
const postRouter = require("./routes/post.routes");
const HttpError = require("./errors/HttpError");

const port = process.env.PORT || 3000;

const app = express();

// Express middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routers
app.use("/owner", ownerRouter);
app.use("/pet", petRouter);
app.use("/service", serviceRouter);
app.use("/post", postRouter);

// Error middleware
app.use((err, _req, res, _next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ error: true, message: err.message });
  }

  return res
    .status(500)
    .json({ error: true, message: "Server internal error" });
});

app.listen(port, () => console.log(`🔥  listening on port ${port}`));
