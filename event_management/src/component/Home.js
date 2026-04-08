import React from 'react';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Hero />

      {/* Welcome Section */}
      <div className="flex flex-col items-center text-center mt-10 px-4">
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 animate-pulse">
          Welcome
        </p>
        <p className="text-lg mt-2 text-gray-700 max-w-xl">
          <span className="font-semibold text-red-500">eventKiya</span> is a professionally managed event organizing service
          bringing unforgettable moments to life.
        </p>
      </div>

      {/* Services Cards */}
      <div className="lg:col-span-3 mt-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our <span className="text-red-500">Services</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-4">
  {[
    { title: 'Birthday', link: '/birthday' },
    { title: 'Artist', link: '/artist' },
    { title: 'Weddings', link: '/wedding' },
    { title: 'Ideation', link: '/idea' },
    { title: 'Merchanding', link: 'merchanding' },
    { title: 'Exhibitions', link: '/exhinitions' },
  ].map((service, index) => (
    <div
      key={index}
      className="bg-white h-32 rounded-xl shadow-lg border-2 border-gray-200 flex justify-center items-center text-red-500 font-semibold text-xl hover:scale-105 hover:bg-red-50 transition-all duration-300"
    >
      <a href={service.link} className="text-center">
        {service.title}
      </a>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
};

export default Home;
