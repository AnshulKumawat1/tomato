import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error: ", error);
        process.exit(1); // Exit process with failure
    }
}



// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.