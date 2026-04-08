import React, { useState } from 'react';
import { contactFunction } from '../Service/Api';

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            setError(null);

            if (!formData.fname || !formData.lname || !formData.email || !formData.phone) {
                alert('Please fill out all required fields!');
                setIsSubmitting(false);
                return;
            }

            if (!validateEmail(formData.email)) {
                alert('Please enter a valid email address!');
                setIsSubmitting(false);
                return;
            }

            if (!validatePhone(formData.phone)) {
                alert('Please enter a valid phone number!');
                setIsSubmitting(false);
                return;
            }

            const response = await contactFunction(formData);

            if (response.status === 201) {
                alert('Your message has been sent successfully!');
                setFormData({ fname: '', lname: '', email: '', phone: '', address: '', message: '' });
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
            <div
                className="h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('image/contactimg.png')" }}
            >
                <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
                    <h1 className="text-5xl font-bold text-yellow-400 mb-2 drop-shadow-md">CONTACT US</h1>
                    <p className="text-xl">Our professional team is here to help with all your inquiries.</p>
                </div>
            </div>

            <div className="text-center my-10">
                <h2 className="text-4xl font-semibold text-yellow-400">
                    <u>Contact</u> Us
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-8 max-w-7xl mx-auto">
                {/* Contact Form */}
                <div className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
                    {['First Name', 'Last Name', 'Email', 'Phone', 'Address', 'Message'].map((field, index) => (
                        <div key={index} className="mb-6">
                            <label htmlFor={field} className="block text-lg font-semibold mb-2 text-gray-700">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            {field === 'address' || field === 'message' ? (
                                <textarea
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                    rows={field === 'message' ? 4 : 2}
                                />
                            ) : (
                                <input
                                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className={`w-full bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-green-500 transition duration-300 transform ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                </div>

                {/* Contact Details */}
                <div className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Contact <span className="text-yellow-500">Details</span>
                    </h3>
                    <p className="mb-2">Email: <a href="mailto:avnishpatel29@gmail.com" className="text-blue-600 hover:underline">agraharishivam6388@gmail.com</a></p>
                    <p className="mb-4">Phone: <a href="tel:+7891081474" className="text-blue-600 hover:underline">6388469930</a></p>

                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Social <span className="text-yellow-500">Media</span>
                    </h3>
                    <p className="mb-1">Instagram: <a href="https://www.instagram.com/agrahari8058" className="text-blue-600 hover:underline">agrahari8058</a></p>
                    <p className="mb-1">Facebook: <a href="https://www.facebook.com/profile.php?id=100055833523615" className="text-blue-600 hover:underline">Click here</a></p>
                    <p className="mb-4">LinkedIn: <a href="https://www.linkedin.com/in/shivam-agrahari-1a816b240" className="text-blue-600 hover:underline">Click here</a></p>

                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                        Add<span className="text-yellow-500">ress</span>
                    </h3>
                    <p>Sheat College of Engineering</p>
                    <p>Varanasi (210068)</p>
                    <div className="bg-yellow-500 h-[50vh] mt-6 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.245682190995!2d82.98113257524792!3d26.8661866766866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399041f93e655f07%3A0xc2ae6124d20c0f48!2sSHEAT%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1713527830057!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
