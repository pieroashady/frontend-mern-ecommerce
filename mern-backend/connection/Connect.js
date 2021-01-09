import mongoose from "mongoose";

class Connect {
  static async Db() {
    try {
      const mo = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });

      console.log(`MongoDB connected: ${mo.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
}

export default Connect;
