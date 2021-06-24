const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    process.env.MONGODB_URL,
    {
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw new Error("error connecting to mongo database");

      console.log("📦  mongo database connected");
    }
  );
};
