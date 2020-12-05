const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  console.log('I am trying')
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    });
    console.log("MongoDb connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
