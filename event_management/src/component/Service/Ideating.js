import React from 'react'

const Ideating = () => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-br from-pink-100 to-purple-200">
                <div className="md:w-2/5 text-center md:text-left">
                    <h1 className="text-6xl font-extrabold text-purple-800 mb-4">Ideating</h1>
                </div>
                <div className="md:w-3/5">
                    <p className="text-xl leading-relaxed text-gray-700 font-medium">
                        A daily routine for our creative minds joining for brainstorming sessions and creating out-of-the-box ideas which are always appreciated by our clients. These concepts are used as the backdrop of all events and promotions.
                    </p>
                </div>
            </section>

            <section className="w-full h-[70vh] overflow-hidden">
                <img src="services/idea.jpg" alt="Ideation" className="w-full h-full object-cover" />
            </section>

            <section className="px-8 md:px-20 py-12">
                <p className="text-2xl font-semibold leading-loose">
                    At CS Entertainment, we thrive on creativity and innovation. This is the place where ideas take flight and where we shape the blueprint for unforgettable experiences. Our team of seasoned event professionals is here to collaborate with you, transforming your vision into a captivating reality.
                </p>
                <p className="mt-6 text-lg leading-relaxed">
                    Step into our Ideation Hub and explore a world of limitless possibilities. Whether it's a corporate gala, a grand wedding, or a themed extravaganza, we're here to brainstorm, conceptualize, and bring your event to life in ways you never imagined.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    From immersive themes to cutting-edge technology, from unique venues to jaw-dropping entertainment, our ideation process is fueled by imagination and tailored to your specific needs.
                </p>
            </section>

            <section className="px-8 md:px-20 py-12 bg-gray-100">
                <h2 className="text-4xl font-bold text-purple-700 mb-8">Here's how our ideation process works:</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                    <p><strong className="text-purple-800 text-xl">Discovery:</strong> We start by getting to know you and your event goals.</p>
                    <p><strong className="text-purple-800 text-xl">Brainstorming:</strong> Our creative minds come together to brainstorm fresh and innovative concepts.</p>
                    <p><strong className="text-purple-800 text-xl">Concept Development:</strong> Building on the ideas generated, we craft a comprehensive event concept.</p>
                    <p><strong className="text-purple-800 text-xl">Collaboration:</strong> We believe in collaborative ideation, and your input is invaluable.</p>
                    <p><strong className="text-purple-800 text-xl">Presentation:</strong> We'll present you with a visual representation of the event's design.</p>
                    <p><strong className="text-purple-800 text-xl">Finalization:</strong> We finalize the event concept and move forward with execution.</p>
                </div>
            </section>

            <section className="px-8 md:px-20 py-12">
                <h2 className="text-3xl font-semibold text-center mb-10">Events Gallery</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {["23", "26", "40", "11", "12"].map((img, idx) => (
                        <div key={idx} className="w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={`photogalleyimg/${img}.jpeg`} alt="Event" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Ideating