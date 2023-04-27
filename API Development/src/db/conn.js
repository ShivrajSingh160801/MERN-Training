const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/CustomerManagement', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection Established");
  } catch (error) {
    console.log(error);
  }
}

connectToDatabase();
  