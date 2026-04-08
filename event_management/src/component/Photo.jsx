import React from 'react';
import Eventcard from './Eventcard';
import CARD from './Data';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const Photo = () => {
  const responsive = {
    0: { items: 1 },
    340: { items: 1.2 },
    450: { items: 1.5 },
    600: { items: 1.8 },
    720: { items: 2.2 },
    1024: { items: 4.5 },
  };

  const carouselItems = Array.isArray(CARD)
    ? CARD.map((item, index) => <Eventcard key={index} imagesrc={item.imageUrl} />)
    : [];

  const renderCarousel = (title) => (
    <div className="container my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 underline decoration-orange-500 underline-offset-8">
        {title}
      </h2>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        items={carouselItems}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <div
        className="w-full h-[50vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: `url('image/Carousel_at_Hyde_Park.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">Photo Gallery</h1>
          <p className="text-lg md:text-xl font-medium">
            Events crafted by our <span className="text-orange-400">professional team</span>.
          </p>
        </div>
      </div>

      {/* Static Grid Section (Optional) */}
      <div className="flex flex-wrap justify-center gap-6 my-8 px-4">
        {carouselItems.length > 0 ? carouselItems : <p>No items available to display.</p>}
      </div>

      {/* Dynamic Carousels */}
      {renderCarousel('Birthday Decoration')}
      {renderCarousel('Wedding Decoration')}
      {renderCarousel('Anniversary Decoration')}

      {/* CTA Section */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Evaluate Your Events</h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-orange-600 mb-4">Trust Our Professional Team</h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          <span className="text-red-500 font-semibold">EventKiya</span> doesn't just manage events —
          we create <strong>unforgettable moments</strong> for life.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white text-xl font-bold px-10 py-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Photo;
