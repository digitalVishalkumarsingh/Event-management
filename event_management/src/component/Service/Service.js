import React from 'react';

const Service = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-white text-gray-900 font-sans">

      {/* Hero Section */}
      <div
        className="w-full mb-16"
        style={{
          height: "50vh",
          backgroundImage: `url('image/contactimg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-gradient-to-t from-black to-transparent">
          <p className="text-5xl font-extrabold text-white mb-2">ABOUT US</p>
          <p className="text-5xl font-bold text-orange-400 drop-shadow-lg">Elevating Events</p>
          <p className="text-4xl font-medium text-orange-300">Enchanting Experience</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-area-2 services">
        <div className="container mx-auto px-4">
          <div className="services-area-inner space-y-12">
            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Ideating", img: "idea.png", desc: "Creative planning and brainstorming to bring your vision to life." },
                { title: "Events", img: "events.png", desc: "From concerts to conferences, we handle all event logistics." },
                { title: "Activations", img: "activities.png", desc: "Engaging activities that leave lasting impressions." },
                { title: "Exhibitions", img: "exhibition.png", desc: "Showcase your products with stunning exhibitions." },
                { title: "Artist Acquisitions", img: "acquisition.png", desc: "Connecting you with the best artists for your event." },
                { title: "Intellectual Property", img: "intellectual_property.png", desc: "Safeguard your creative assets and ideas." },
                { title: "Merchandising", img: "merchandising.png", desc: "Branded items that help promote and enhance your event." },
                { title: "Wedding", img: "wedding.png", desc: "Creating unforgettable weddings with personalized touches." },
              ].map((service, index) => (
                <div key={index} className="text-center bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <img
                      src={`assets/images/services/icon/${service.img}`}
                      alt={service.title}
                      className="w-24 h-24 mx-auto mb-4 object-contain"
                    />
                    <h3 className="text-2xl font-semibold text-purple-700">{service.title}</h3>
                    <p className="text-lg text-gray-600 mt-2">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Service;
