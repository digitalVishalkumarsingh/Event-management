import React from 'react';

const Artist = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-wrap items-center justify-between px-8 py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">Artist Acquisitions</h1>
          <p className="text-xl font-medium">
            Bridging the gap between corporates and celebrities — our Mumbai team connects you with Bollywood stars for launches, shows & more.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src="/services/artist.jpg" alt="Artist" className="rounded-xl shadow-xl w-full h-[400px] object-cover" />
        </div>
      </div>

      {/* Description */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <p className="text-2xl font-semibold mb-8 text-center">
          We specialize in acquiring exceptional artists and performers to elevate your events to new heights.
        </p>

        <div className="space-y-8">
          {[
            {
              title: "Musical Performances",
              content:
                "From bands to solo artists and instrumentalists, we connect you with musical talent that fits your theme and audience.",
            },
            {
              title: "Dance and Theatrical Performances",
              content:
                "We collaborate with choreographers and theatre groups to deliver dynamic and artistic stage experiences.",
            },
            {
              title: "Visual and Fine Arts",
              content:
                "Live art demos, curated exhibitions, and interactive installations make your event visually stunning.",
            },
            {
              title: "Speakers and Thought Leaders",
              content:
                "We bring in inspiring speakers, industry experts, and influencers who deliver powerful insights.",
            },
            {
              title: "Specialty Acts and Performers",
              content:
                "From magicians to aerialists, we provide jaw-dropping specialty acts that keep guests amazed.",
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-3xl font-bold text-purple-700 mb-2">{title}</h2>
              <p className="text-lg text-gray-700">{content}</p>
            </div>
          ))}

          <p className="text-lg mt-10">
            We ensure every artist aligns with your event's vision and audience. Contact us today to bring your event alive with unforgettable talent and experiences.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-8 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Events Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {['23.jpeg', '26.jpeg', '40.jpeg', '11.jpeg', '12.jpeg'].map((img, i) => (
            <div
              key={i}
              className="w-[300px] h-[400px] overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300 bg-white"
            >
              <img src={`/photogalleyimg/${img}`} alt="Gallery" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
