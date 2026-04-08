import React, { useEffect, useState } from 'react';
import { Backendurl } from '../Service/helper';

const Upcoming = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all events
    const fetchAllEvents = async () => {
      try {
        const response = await fetch(`${Backendurl}/api/events`);
        const data = await response.json();
        if (data.success) {
          setEvents(data.data);
        }
      } catch (error) {
        console.error('Error fetching all events:', error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchAllEvents();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-12">
        All Upcoming Events
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p className="text-center text-lg text-gray-500">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No events available.</p>
        ) : (
          events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={event.image || 'image/getty_479977238_253066.jpg'}
                  alt={event.eventName}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                {/* Event Name */}
                <h3 className="text-2xl font-semibold text-indigo-700">{event.eventName}</h3>

                {/* Event Date */}
                <p className="text-gray-600 mt-2">
                  <strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}
                </p>

                {/* Event Address */}
                <p className="text-gray-600 mt-2">
                  <strong>Address:</strong> {event.eventAddress}
                </p>

                {/* Event Description */}
                <p className="text-gray-600 mt-4 line-clamp-3">
                  <strong>Description:</strong> {event.description || 'No description available'}
                </p>
              </div>
              
              {/* Button to view details */}
              <div className="p-6">
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  View Event Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Upcoming;
