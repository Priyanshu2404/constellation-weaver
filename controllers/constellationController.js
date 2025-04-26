const Constellation = require("../models/Constellation");
const mongoose = require("mongoose");

// handles creation of a new constellation
const createconstellation = async (req, res) => {
    try {
        const { points, name, meaning, story } = req.body;

        // Ensure that the userId is available from the decoded JWT
        const userId = req.user.userId; // Extracted from the authenticate middleware

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Create the constellation
        const constellation = await Constellation.create({
            userId, // Assign the userId to the constellation
            points,
            name,
            meaning,
            story
        });

        res.status(201).json({ message: "Created successfully", constellation });
    } catch (err) {
        res.status(400).json({ message: "Error in creating", error: err.message });
    }
};


// Handles retrieving all constellations
const getconstellation = async (req, res) => {
    try {
        const constellations = await Constellation.find();
        res.status(200).json(constellations);
    } catch (err) {
        res.status(500).json({ message: "Error in getting constellations", error: err.message });
    }
};

// Gets a specific constellation by id
const getconstellationbyid = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid constellation ID" });
        }

        const constellation = await Constellation.findById(req.params.id);
        if (!constellation) {
            return res.status(404).json({ message: "Constellation not found" });
        }

        res.status(200).json(constellation);
    } catch (err) {
        res.status(500).json({ message: "Error occurred", error: err.message });
    }
};

// Handles updating a specific constellation by id
const updateconstellation = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid constellation ID" });
        }

        const updatedconstellation = await Constellation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedconstellation) {
            return res.status(400).json({ message: "Constellation not found" });
        }

        res.status(200).json({ message: "Updated successfully", updatedconstellation });
    } catch (err) {
        res.status(500).json({ message: "Error occurred", error: err.message });
    }
};

// Handles deleting a specific constellation by id
const deleteconstellation = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid constellation ID" });
        }

        const deletedconstellation = await Constellation.findByIdAndDelete(req.params.id);
        if (!deletedconstellation) {
            return res.status(400).json({ message: "Constellation not found" });
        }

        res.status(200).json({ message: "Deleted successfully", deletedconstellation });
    } catch (err) {
        res.status(500).json({ message: "Error occurred", error: err.message });
    }
};

module.exports = {
    createconstellation,
    getconstellation,
    getconstellationbyid,
    updateconstellation,
    deleteconstellation,
};
