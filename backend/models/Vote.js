import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue',
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Vote = mongoose.model('Vote', voteSchema);
export default Vote;