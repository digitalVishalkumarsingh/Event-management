import React from 'react';

const Birthday = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-wrap items-center justify-between px-8 py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">Birthday</h1>
          <p className="text-xl font-medium">
            Daily brainstorming sessions fuel our creativity—shaping unique concepts and experiences that delight our clients.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="/image/vediokk.png"
            alt="Birthday Events"
            className="rounded-xl shadow-xl w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Ideation Hub Description */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <p className="text-2xl font-semibold mb-8 text-center">
          Welcome to the Ideation Hub – where imagination meets execution.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          At CS Entertainment, we thrive on creativity and innovation. This is the place where ideas take flight and where we shape the blueprint for unforgettable experiences. Our team of seasoned event professionals is here to collaborate with you, transforming your vision into a captivating reality.
          <br /><br />
          Whether it's a corporate gala, a grand wedding, or a themed extravaganza, we're here to brainstorm, conceptualize, and bring your event to life in ways you never imagined. From immersive themes to cutting-edge tech, our ideation process ensures your event stands out.
        </p>
      </div>

      {/* Process Steps */}
      <div className="bg-gray-100 px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Our Ideation Process</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          {[
            { title: 'Discovery', desc: 'We start by getting to know you and your event goals. We dive deep into your ideas, themes, and desired outcomes.' },
            { title: 'Brainstorming', desc: 'Our creative team generates fresh, on-theme ideas that are bold, unique, and truly aligned with your vision.' },
            { title: 'Concept Development', desc: 'We build a cohesive event concept with every detail—decor, logistics, and engagement—tailored to perfection.' },
            { title: 'Collaboration', desc: 'We welcome your input and tweak our concepts until they fit your dream perfectly.' },
            { title: 'Presentation', desc: 'Get a visual plan of your event with mood boards, timelines, and the design layout.' },
            { title: 'Finalization', desc: 'With your feedback, we lock in the final concept and move into execution mode.' },
          ].map(({ title, desc }, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-pink-600">{title}</h3>
              <p className="text-md text-gray-700 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Events Gallery */}
      <div className="px-8 py-16">
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

export default Birthday;
