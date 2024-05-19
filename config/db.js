import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tanvirahmedshihab:Shihab123045@cluster0.2z16mzs.mongodb.net/food_order').then(()=>console.log("DB Connected"));
}