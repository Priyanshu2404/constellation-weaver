require('dotenv').config();
const mongoose = require('mongoose');

//used to establish connection with mongodb

const connectToMongoDB = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectToMongoDB;
