require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// Connect to database
connectDB();
console.log("Connected to MongoDB successfully");

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true,
}));

// Base route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// Routes
const userRoutes = require("./routes/userRoutes");
const constellationRoutes = require("./routes/constellationRoutes");

app.use("/api/users", userRoutes);
app.use("/constellations", constellationRoutes);

const stories = {
    Orion: "Orion is a mighty hunter in Greek mythology, and one of the most recognizable constellations.",
    Lyra: "Lyra represents the lyre of Orpheus, a musician so talented he could charm even the gods.",
    "Ursa Major": "Ursa Major is the Great Bear, known for the Big Dipper asterism it contains.",
    "Ursa Minor": "Ursa Minor, the Little Bear, holds the North Star at the end of its tail.",
    "Canis Major": "Canis Major is the Greater Dog, loyal companion of Orion, featuring the star Sirius.",
    "Canis Minor": "Canis Minor is a small constellation representing one of Orion’s hunting dogs.",
    Auriga: "Auriga is the Charioteer, often shown holding a goat and her kids.",
    Draco: "Draco is a dragon winding between the Big and Little Bear in the northern sky.",
};

app.get('/api/constellation/story/:name', (req, res) => {
    const { name } = req.params;
    const story = stories[name] || "No story available for this constellation.";
    res.json({ story });
});

// Start server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
