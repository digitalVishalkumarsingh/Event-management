import React from 'react';

const Merchanding = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 text-gray-900 font-sans px-4 md:px-10 py-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center min-h-[60vh] mb-16">
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-purple-700 drop-shadow-md">Merchanding</h1>
        </div>
        <div className="w-full md:w-[60%] mt-8 md:mt-0">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700">
            Understanding client needs and delivering quality goods and services on time — that’s our superpower.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-6xl mx-auto mb-16">
        <img
          src="services/merchandise.jpg"
          alt="Merchandise Showcase"
          className="w-full h-[50vh] object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Description Section */}
      <div className="max-w-5xl mx-auto space-y-10">
        <p className="text-xl font-semibold text-gray-800">
          At <span className="text-purple-700 font-bold">CS Entertainment</span>, we believe merchandising enhances the overall event experience and creates lasting impressions.
        </p>

        <h2 className="text-4xl font-bold text-purple-800 border-b-4 border-purple-300 inline-block pb-2">
          Why Merchandising Matters
        </h2>

        <div className="space-y-8 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl text-purple-700 font-bold mb-2">🎁 Branded Merchandise</h3>
            <p>
              Custom t-shirts, caps, bags & more — personalized with your event's logo & theme. They’re takeaways that last long after the music fades.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-purple-700 font-bold mb-2">🔥 Limited Edition Drops</h3>
            <p>
              Drive excitement and exclusivity with limited edition items. Scarcity adds value and makes your event unforgettable.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-purple-700 font-bold mb-2">🎯 Event-Specific Themes</h3>
            <p>
              From conference kits to festival wristbands, everything is tailored to your event’s vibe and vision.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-purple-700 font-bold mb-2">🤝 Sponsor Integration</h3>
            <p>
              Boost sponsor visibility with co-branded gear. Great for ROI, better for collaboration.
            </p>
          </div>

          <p className="text-lg">
            We handle it all — from design to distribution. Let us create merchandise your audience will cherish.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">📸 Events Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-2 md:px-0">
          {["23.jpeg", "26.jpeg", "40.jpeg", "11.jpeg", "12.jpeg"].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <img
                src={`photogalleyimg/${img}`}
                alt={`Gallery ${i + 1}`}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merchanding;
