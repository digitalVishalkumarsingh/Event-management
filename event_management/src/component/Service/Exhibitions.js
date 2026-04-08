import React from 'react'

const Exhibitions = () => {
    return (
        <div className="px-8 py-10 bg-gradient-to-b from-white to-gray-100">
            <div className="flex flex-wrap justify-between items-center min-h-[60vh] mb-10">
                <div className="w-full md:w-2/5 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-6xl font-extrabold text-gray-800">Exhibitions</h1>
                </div>
                <div className="w-full md:w-3/5">
                    <p className="text-2xl font-medium text-gray-700 leading-relaxed">
                        CS Entertainment has the immense capabilities of organizing and creating a space for trade fair and exhibition setup. We offer these services across India. With years of experience in exhibitions and trade fairs, we excel from identifying the venue to décor, set design, and flawless execution. We have the strength to organize setups simultaneously in different cities.
                    </p>
                </div>
            </div>

            <div className="w-full h-[70vh] overflow-hidden rounded-xl shadow-lg mb-12">
                <img src="services/property.jpg" alt="Exhibition Showcase" className="w-full h-full object-cover" />
            </div>

            <div className="text-center max-w-4xl mx-auto mb-10">
                <p className="text-xl font-semibold text-gray-800">
                    We specialize in creating extraordinary exhibitions that showcase the best of your industry and captivate attendees.
                </p>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Here's how our ideation process works:</h2>
                <div className="space-y-6">
                    {[
                        {
                            title: "Industry Showcases",
                            desc: "From trade shows and conventions to specialized industry events, we create spaces for professionals to connect, learn, and thrive."
                        },
                        {
                            title: "Art and Culture Exhibitions",
                            desc: "Celebrate creativity through curated displays of art, sculpture, photography, and more in immersive environments."
                        },
                        {
                            title: "Technology Exhibitions",
                            desc: "Showcase innovation with interactive setups that highlight cutting-edge gadgets and futuristic advancements."
                        },
                        {
                            title: "Educational Exhibitions",
                            desc: "Interactive and informative, these exhibitions are designed to inspire and expand knowledge."
                        },
                        {
                            title: "Product Launch Exhibitions",
                            desc: "Introduce your product to the world with powerful storytelling, visuals, and on-ground interaction."
                        },
                    ].map(({ title, desc }, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">{desc}</p>
                        </div>
                    ))}

                    <p className="text-lg mt-6 font-medium text-gray-700">
                        Each exhibition represents a collaborative journey with our clients. Let us craft an impactful showcase that leaves a lasting impression.
                    </p>
                </div>
            </div>

            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-900">Events Gallery</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 px-6">
                {["23.jpeg", "26.jpeg", "40.jpeg", "11.jpeg", "12.jpeg"].map((img, idx) => (
                    <div key={idx} className="w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                        <img src={`photogalleyimg/${img}`} alt="Event Gallery" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Exhibitions;
