import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    votedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
}, { timestamps: true });

const Venue = mongoose.model('Venue', venueSchema);
export default Venue;