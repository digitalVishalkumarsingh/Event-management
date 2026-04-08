import React from 'react';

const About = () => {
    return (
        <div className='pt-16 bg-white text-gray-800'>

            {/* Hero Section */}
            <div
                className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url('/image/contactimg.png')` }}
            >
                <div className="text-center bg-black bg-opacity-50 p-6 rounded-md">
                    <p className='text-5xl font-bold font-serif text-red-500'>ABOUT US</p>
                    <p className='text-3xl font-bold text-orange-400'>Elevating Events</p>
                    <p className='text-3xl font-bold text-orange-400'>Enchanting Experience</p>
                </div>
            </div>

            {/* About Text */}
            <div className='max-w-5xl mx-auto text-center py-12 px-4'>
                <h2 className='text-4xl font-bold mb-2'>We Are Event <span className='text-orange-500 underline'>Management Agency</span></h2>
                <h3 className='text-3xl font-semibold mb-4'>For Managing Your Events</h3>
                <p className='text-lg'>
                    We work with a diverse range of companies — from small to medium-sized businesses — for their brand building.
                    From our Bangalore office and pan-India networks, we've serviced clients across India for over 6 years.
                    From ideation to execution, we handle it all!
                </p>
            </div>

            {/* Gallery Section */}
            <div className="flex flex-wrap justify-center gap-4 px-4 mb-10">
                {["23.jpeg", "26.jpeg", "40.jpeg", "11.jpeg", "12.jpeg"].map((img, i) => (
                    <div
                        key={i}
                        className="w-60 h-80 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={`/photogalleyimg/${img}`}
                            alt={`gallery-${i}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Team Rules Section */}
            <div className='max-w-6xl mx-auto px-4 py-10'>
                <h2 className='text-4xl font-bold font-serif mb-6 text-center'>Our Team Rules</h2>
                <div className='md:flex gap-10'>
                    <div className='md:w-1/2 mb-10 md:mb-0'>
                        <p className='text-2xl font-semibold mb-2'>Team Rule (No.01)</p>
                        <h3 className='text-xl font-bold mb-2'>Love What We Do</h3>
                        <p>
                            We’re passionate about making every event unforgettable.
                            From brainstorming to final execution, we ensure your vision becomes a reality.
                        </p>
                    </div>
                    <div className='md:w-1/2'>
                        <p className='text-2xl font-semibold mb-2'>Team Rule (No.02)</p>
                        <h3 className='text-xl font-bold mb-2'>Trust</h3>
                        <p>
                            We believe trust is the foundation of a great partnership.
                            Our team works transparently, keeping clients in the loop from day one.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-100 py-10">
                <div className="text-center mb-8">
                    <p className="text-red-500 font-bold text-2xl">Welcome</p>
                    <p className="text-lg text-gray-700">eventKiya is a professionally managed event team</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
                    {["Birthday", "Sangeet", "Weddings", "Photography", "Catering", "Promotions"].map((service, i) => (
                        <div
                            key={i}
                            className="h-24 border-2 border-gray-300 bg-white rounded-lg shadow-md flex justify-center items-center text-red-500 font-semibold text-xl hover:bg-red-50 transition"
                        >
                            {service}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default About;
