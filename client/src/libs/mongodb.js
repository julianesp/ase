//libs\mongodb.js
// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Conectado a MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectMongoDB;

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Conectado a MongoDB");
    }
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    throw error;
  }
};

export default connectMongoDB;
