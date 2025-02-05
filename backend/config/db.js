import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGOOSE)
    .then(() => console.log("DB Connected"));
};
