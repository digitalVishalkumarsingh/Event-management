import React from 'react';

const Intellectual = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-20">
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 leading-tight">
            Intellectual <br /> Property
          </h1>
        </div>
        <div className="w-full md:w-[60%] mt-10 md:mt-0">
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            As the name of the company goes, we focus on creating unique concepts in entertainment and music — always offbeat, always thrilling. Foot tapping, head banging, laughter, suspense... the journey goes on. Stay tuned!
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center my-10 px-4">
        <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-6xl">
          <img src="image/vediokk.png" alt="IP Visual" className="w-full h-[60vh] object-cover" />
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-lg md:text-xl font-semibold mb-6">
          At CS Entertainment, we recognize the significance of intellectual property in the world of creative expression. This space outlines how we protect and respect original content in all our events.
        </p>

        <h2 className="text-3xl font-bold text-purple-800 mb-6">Our IP Protection Framework</h2>

        <div className="space-y-6">
          <p><strong className="text-xl text-purple-700">Respecting Trademarks & Copyrights:</strong> We make sure all materials like logos, music, and creative assets comply with legal guidelines. Clients' content is used only with permission, ensuring full compliance.</p>
          
          <p><strong className="text-xl text-purple-700">Licensing & Permissions:</strong> Whether it’s music rights, visual projection, or media display — we collaborate with legal agencies to secure every necessary license, keeping everything lawful and professional.</p>

          <p><strong className="text-xl text-purple-700">Team Awareness & Education:</strong> Our staff are trained to value and uphold IP rights. This empowers us to guide clients and execute events with full responsibility toward ownership and originality.</p>

          <p>We believe this culture of respect not only sets industry benchmarks but also strengthens trust with clients, creators, and the audience.</p>

          <p>Got questions about intellectual property in events? We're always happy to guide you through best practices and legal safety nets.</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Events Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["23.jpeg", "26.jpeg", "40.jpeg", "11.jpeg", "12.jpeg"].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img src={`photogalleyimg/${img}`} alt={`Event ${i}`} className="w-full h-[35vw] object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intellectual;
