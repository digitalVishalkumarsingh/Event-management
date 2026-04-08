
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Hero_img from './Photo/Hero_img';

const Hero = () => {
  const images = Hero_img() || [];

  const items = images.map((item, index) => (
    <div key={item.source} className="relative w-full h-full">
      {item.type === 'image' ? (
        <img
          src={item.source}
          className="w-full h-[90vh] object-cover"
          alt={`carousel-img-${index}`}
        />
      ) : (
        <video
          src={item.source}
          autoPlay
          muted
          loop
          className="w-full h-[90vh] object-cover"
        />
      )}

      {/* Animated Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm text-center">
        <h3 className="text-white text-3xl md:text-5xl font-extrabold mb-2 animate-fade-in-down">
          Life Is An <span className="text-red-400">Event</span>
        </h3>
        <h1 className="text-white text-3xl md:text-6xl font-extrabold mb-2 animate-fade-in-up">
          Make It <span className="text-yellow-300">Unforgettable</span>
        </h1>
        <h3 className="text-white text-2xl md:text-4xl font-semibold animate-fade-in-up">
          With <span className="text-blue-300">eventKiya</span>
        </h3>
      </div>
    </div>
  ));

  return (
    <div className="w-full bg-black">
      <AliceCarousel
        autoPlay
        autoPlayInterval={2500}
        infinite
        disableButtonsControls
        disableDotsControls
        items={items}
      />
    </div>
  );
};

export default Hero;
