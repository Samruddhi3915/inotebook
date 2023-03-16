const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("Connected to Mongo successfully");
  });
};
module.exports = connectToMongo;
