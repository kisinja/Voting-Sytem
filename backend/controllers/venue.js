import Venue from "../models/Venue.js";

// @desc Create Venue
// @route POST /api/venues
// @access Private
const createVenue = async (req, res) => {
    const { name, location, description, image } = req.body;

    const venueExists = await Venue.findOne({ name });

    if (venueExists) {
        res.status(400);
        throw new Error("Venue already exists");
    }

    const venue = await Venue.create({
        name,
        location,
        description,
        image,
    });

    if (venue) {
        res.status(201).json({
            _id: venue._id,
            name: venue.name,
            description: venue.description,
            image: venue.image,
            location: venue.location
        });
    } else {
        res.status(400);
        throw new Error("Invalid venue data");
    }
};

// @desc Get all Venues
// @route GET /api/venues
// @access Public
const getVenues = async (req, res) => {
    const venues = await Venue.find({});
    res.json(venues);
};

// @desc Get Venue by ID
// @route GET /api/venues/:id
// @access Public
const getVenueById = async (req, res) => {
    const venue = await Venue.findById(req.params.id);

    if (venue) {
        res.json(venue);
    } else {
        res.status(404);
        throw new Error("Venue not found");
    }
};

// @desc Update Venue
// @route PUT /api/venues/:id
// @access Private
const updateVenue = async (req, res) => {
    const venue = await Venue.findById(req.params._id);

    if (venue) {
        venue.name = req.body.name || venue.name;
        venue.location = req.body.location || venue.location;
        venue.description = req.body.description || venue.description;
        venue.image = req.body.image || venue.image;

        const updatedVenue = await venue.save();

        res.json({
            _id: updatedVenue._id,
            name: updatedVenue.name,
            location: updatedVenue.location,
            description: updatedVenue.description,
            image: updatedVenue.image
        });
    } else {
        res.status(404);
        throw new Error("Venue not found");
    }
};


// @desc Delete Venue
// @route DELETE /api/venues/:id
// @access Private
const deleteVenue = async (req, res) => {
    const venue = await Venue.findById(req.params.id);

    if (venue) {
        await venue.remove();
        res.json({ message: "Venue removed" });
    } else {
        res.status(404);
        throw new Error("Venue not found");
    }
};

export {
    createVenue,
    getVenues,
    getVenueById,
    updateVenue,
    deleteVenue
};