const express = require('express');
const router = express.Router();
const Event = require('../Model/Event'); // Adjust the path as necessary
const { body, validationResult } = require('express-validator');

// POST /api/events - Add new event with validation
router.post('/events', 
  [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('contact').isMobilePhone().withMessage('Invalid contact number'),
    body('eventName').not().isEmpty().withMessage('Event name is required'),
    body('eventDate').isDate().withMessage('Invalid event date'),
    body('eventAddress').not().isEmpty().withMessage('Event address is required'),
    body('guests').isInt().withMessage('Number of guests should be an integer'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const newEvent = new Event(req.body);
      await newEvent.save();
      res.status(201).json({ success: true, data: newEvent });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

// Optional: GET all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
