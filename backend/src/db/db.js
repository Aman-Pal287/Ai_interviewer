const mongoose = require("mongoose");

function conntedToDb() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("Mongoose Connection error : ", err);
    });
}

module.exports = conntedToDb