import express from 'express';
import { getVenues, getVenueById, createVenue, updateVenue, deleteVenue } from '../controllers/venue.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc Create venues
router.post("/", protect, createVenue);

// @desc Get all venues
router.get("/", getVenues);

// @desc Get venue by ID
router.get("/:id", protect, getVenueById);

// @desc Update venue
router.put("/:id", protect, admin, updateVenue);

// @desc Delete venue
router.delete("/:id", protect, admin, deleteVenue);

export default router;