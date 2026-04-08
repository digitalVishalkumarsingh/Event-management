import React, { useState } from 'react';
import { Backendurl } from '../Service/helper';

const BookEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    eventName: '',
    eventDate: '',
    eventAddress: '',
    guests: '',
    tokenAmount: 5000,
    services: [],
  });

  const [loading, setLoading] = useState(false); // State to manage loading indicator

  // Prefill name and email from localStorage
 

  const serviceOptions = [
    'Catering',
    'Decoration',
    'DJ',
    'Sangeet',
    'Destination Wedding',
    'Photography',
    'Lighting',
    'Venue Booking',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const submitEventData = async () => {
    try {
      setLoading(true); // Start loading indicator
      const res = await fetch(`${Backendurl}/api/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registration successful! Our team will contact you within 48 hours and provide an estimated cost.');
        setFormData({
          name: '',
          email: '',
          address: '',
          contact: '',
          eventName: '',
          eventDate: '',
          eventAddress: '',
          guests: '',
          tokenAmount: 5000,
          services: [],
        });
      } else {
        alert('Error: ' + data.message);
      }
      setLoading(false); // Stop loading indicator
    } catch (err) {
      console.error('Submit error:', err);
      setLoading(false); // Stop loading indicator
      alert('Submission failed. Check console.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (new Date(formData.eventDate) <= new Date()) {
      alert('Event date must be in the future');
      return;
    }
    await submitEventData();
  };

  return (
    <>
      <div
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/image/contactimg.png')` }}
      >
        <div className="text-center bg-black bg-opacity-50 p-6 rounded-md">
          <p className="text-5xl font-bold font-serif text-red-500">Book Event</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-xl rounded-2xl mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Event Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} placeholder="Full Name" className="input-field" onChange={handleChange} required />
              <input type="email" name="email" value={formData.email} placeholder="Email" className="input-field" onChange={handleChange} required />
              <input type="text" name="address" value={formData.address} placeholder="Address" className="input-field" onChange={handleChange} required />
              <input type="tel" name="contact" value={formData.contact} placeholder="Contact Number" className="input-field" onChange={handleChange} required />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Event Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="eventName" value={formData.eventName} className="input-field" onChange={handleChange} required>
                <option value="">-- Select Event Type --</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate">Corporate</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              <input type="date" name="eventDate" value={formData.eventDate} className="input-field" onChange={handleChange} required />
              <input type="text" name="eventAddress" value={formData.eventAddress} placeholder="Event Address" className="input-field" onChange={handleChange} required />
              <input type="number" name="guests" value={formData.guests} placeholder="Number of Guests" className="input-field" onChange={handleChange} required />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Services Required</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {serviceOptions.map((service) => (
                <label key={service} className="flex items-center space-x-2 text-gray-600">
                  <input type="checkbox" value={service} checked={formData.services.includes(service)} onChange={handleCheckboxChange} className="accent-indigo-600" />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200" disabled={loading}>
              {loading ? 'Processing...' : 'Register Now'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookEvent;
