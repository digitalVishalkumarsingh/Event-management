// models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventAddress: { type: String, required: true },
  guests: { type: Number, required: true },
  services: [{ type: String }],
  tokenAmount: { type: Number, required: true },
}, { timestamps: true });

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
