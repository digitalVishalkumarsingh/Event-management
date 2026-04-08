import React from 'react';

const Wedding = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <div className="flex justify-between items-center h-[50vh] px-6 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700">
        <div className="flex flex-col justify-center items-center w-[40%] h-full text-center">
          <p className="text-white font-extrabold text-5xl md:text-6xl drop-shadow-lg">Wedding</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[60%] h-full p-6">
          <p className="text-white text-lg md:text-2xl font-medium opacity-90">
            We brainstorm creative ideas and make them come alive, transforming your event into a unique, unforgettable experience.
          </p>
        </div>
      </div>

      {/* Wedding Image */}
      <div className="w-full h-[70vh]">
        <img
          src="services/wedding.jpg"
          alt="Wedding Event"
          className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* About Section */}
      <div className="px-6 py-8">
        <p className="text-2xl font-semibold text-gray-700 mb-6">
          At CS Entertainment, creativity is at the heart of everything we do. Our Ideation Hub is a place where imagination meets execution, and your dream event takes shape.
        </p>
        <p className="text-xl text-gray-600 mb-6">
          We collaborate with you to craft memorable experiences, whether it's a wedding, corporate gala, or themed event. With cutting-edge technology and immersive themes, we ensure every detail is perfectly tailored to your needs.
        </p>
        <p className="text-xl text-gray-600">
          Let's create an unforgettable event together, filled with innovation, creativity, and personalized touches.
        </p>
      </div>

      {/* Ideation Process Section */}
      <div className="px-6 py-10 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">How Our Ideation Process Works</h1>
        <div className="space-y-6">
          <p className="text-2xl font-semibold text-gray-700">
            <span className="text-orange-500">Discovery:</span> We start by understanding your vision and goals, diving deep into the ideas and themes you desire for your event.
          </p>
          <p className="text-2xl font-semibold text-gray-700">
            <span className="text-orange-500">Brainstorming:</span> Our creative minds come together to generate innovative and unique concepts, exploring different themes and cutting-edge experiences.
          </p>
          <p className="text-2xl font-semibold text-gray-700">
            <span className="text-orange-500">Concept Development:</span> We curate every detail, ensuring the event aligns with your vision, from decor to guest experience.
          </p>
          <p className="text-2xl font-semibold text-gray-700">
            <span className="text-orange-500">Collaboration:</span> Your feedback is invaluable. We refine and tweak our concepts based on your ideas to create the perfect design.
          </p>
          <p className="text-2xl font-semibold text-gray-700">
            <span className="text-orange-500">Presentation:</span> We present the finalized concept with visual designs, timelines, and plans, giving you a preview of the big day.
          </p>
          <p className="text-2xl font-semibold text-gray-700">
            <span className="text-orange-500">Finalization:</span> After incorporating your feedback, we finalize the plans and begin bringing your event vision to life.
          </p>
        </div>
      </div>

      {/* Events Gallery */}
      <div className="px-6 py-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="relative group">
            <img src="photogalleyimg/23.jpeg" alt="Wedding Event 1" className="w-full h-full object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="relative group">
            <img src="photogalleyimg/26.jpeg" alt="Wedding Event 2" className="w-full h-full object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="relative group">
            <img src="photogalleyimg/40.jpeg" alt="Wedding Event 3" className="w-full h-full object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="relative group">
            <img src="photogalleyimg/11.jpeg" alt="Wedding Event 4" className="w-full h-full object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>

      {/* UL - LI Section */}
      <div className="px-6 py-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Process in Simple Steps</h2>
        <div className="flex flex-wrap justify-center space-x-6 space-y-6 md:space-x-12">
          {['Discovery', 'Brainstorming', 'Concept Development', 'Collaboration', 'Presentation', 'Finalization'].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl font-semibold text-gray-700 mb-2">{step}</div>
              <p className="text-xl text-gray-600">Step {index + 1}: Description of {step}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Wedding;
