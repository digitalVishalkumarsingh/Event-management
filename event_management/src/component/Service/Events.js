import React from 'react';

const Events = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-wrap items-center justify-between px-8 py-20 bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl font-medium">
            Our mantra is to create unique concepts and bring them to life. Our in-house team transforms dreams into dynamic, unforgettable experiences.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/services/event.jpg"
            alt="Event"
            className="rounded-xl shadow-xl w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <p className="text-2xl font-semibold text-center mb-6">
          At CS Entertainment, we specialize in curating unforgettable experiences that leave a lasting impression.
        </p>
      </div>

      {/* Event Categories */}
      <div className="bg-gray-100 px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Our Event Portfolio</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          {[
            {
              title: 'Corporate Events',
              desc:
                'From high-profile conferences to engaging retreats and galas, we deliver a seamless blend of professionalism and creativity.',
            },
            {
              title: 'Weddings and Celebrations',
              desc:
                'Celebrate life’s most precious moments with elegance, charm, and personalized touches for a truly enchanting experience.',
            },
            {
              title: 'Social Gatherings',
              desc:
                'From themed parties to fundraisers, our vibrant, stylish events are flawlessly executed and always memorable.',
            },
            {
              title: 'Concerts and Festivals',
              desc:
                'High-energy concerts and immersive festivals—from talent sourcing to stage effects, we make it unforgettable.',
            },
            {
              title: 'Community and Non-Profit',
              desc:
                'Driven by passion and purpose, we organize inspiring community events, fundraisers, and impactful initiatives.',
            },
          ].map(({ title, desc }, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-pink-600">{title}</h3>
              <p className="text-md text-gray-700 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-8 py-12 text-center">
        <p className="text-xl font-medium max-w-3xl mx-auto">
          If you're ready to create your own extraordinary event, reach out to us today. Let’s bring your vision to life with unmatched creativity and precision.
        </p>
      </div>

      {/* Gallery */}
      <div className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Events Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {['23.jpeg', '26.jpeg', '40.jpeg', '11.jpeg', '12.jpeg'].map((img, i) => (
            <div
              key={i}
              className="w-[300px] h-[400px] overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300 bg-white"
            >
              <img
                src={`/photogalleyimg/${img}`}
                alt="Event"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
