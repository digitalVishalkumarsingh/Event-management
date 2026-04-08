import React from 'react';

const Activating = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <section className="flex flex-col md:flex-row items-center justify-around min-h-screen p-6">
        <div className="md:w-2/5 text-center md:text-left">
          <h1 className="text-5xl font-bold text-purple-800 mb-6 animate-pulse">Activating</h1>
        </div>
        <div className="md:w-3/5">
          <p className="text-xl text-gray-700 leading-relaxed">
            The Activation division is responsible for all the on-ground promotions right from the in-store activations to the mall activations. Our activation team is known for their 24/7 service and immediate solutions. This super human team is always on ground and in the market with all the latest updates.
          </p>
        </div>
      </section>

      <section className="w-full h-[70vh] flex justify-center">
        <img
          src="services/activation.jpg"
          alt="Activation"
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </section>

      <section className="p-6 md:p-12">
        <p className="text-2xl text-gray-800 font-semibold text-center md:text-left mb-6">
          At CS Entertainment, we specialize in creating impactful activations that leave a lasting impression on your target audience.
        </p>

        <h2 className="text-3xl font-bold text-purple-900 mb-8">Here's how our ideation process works:</h2>

        <div className="space-y-8">
          {[
            {
              title: 'Brand Activations',
              desc: 'We transform brands into immersive experiences...'
            },
            {
              title: 'Trade Shows and Exhibitions',
              desc: 'Stand out from the competition with our exceptional trade show...'
            },
            {
              title: 'Digital and Virtual Activations',
              desc: 'Embrace the digital age with our cutting-edge activations...'
            },
            {
              title: 'Influencer Collaborations',
              desc: 'Partnering with influential personalities can amplify your brand...'
            },
            {
              title: 'Guerrilla Marketing',
              desc: 'Sometimes, unconventional approaches are the most effective...'
            }
          ].map(({ title, desc }, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-purple-700 mb-2">{title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}

          <p className="text-lg text-gray-700 mt-8">
            We strive to understand your brand, target audience, and marketing goals to deliver activations that make a real impact.
            If you're ready to take your brand to the next level, reach out to us today.
          </p>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Events Gallery</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {[23, 26, 40, 11, 12].map((img, i) => (
            <div
              key={i}
              className="w-[280px] h-[380px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={`photogalleyimg/${img}.jpeg`}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activating;
