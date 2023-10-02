import mongoose from "mongoose";
const { DB_HOST } = process.env;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectMongoDb;
