const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://jesus:df6hWapFBsCuelER@cluster0.vfmmavy.mongodb.net/test_mena";

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }

}

module.exports = connectDB;