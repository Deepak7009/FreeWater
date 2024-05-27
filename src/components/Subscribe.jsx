import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Subscribe() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: ''
    });
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        const { firstName, lastName, email, city } = formData;

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        setEmailError('');

        const templateParams = {
            name: `${firstName} ${lastName}`,
            email,
            city,
        };

        try {
            await emailjs.send(
                'service_kz7aisw',  // EmailJS service ID
                'template_m0rydoh',  // EmailJS template ID
                templateParams,
                'sRzkVggIpZqCpMPKX'  // EmailJS user ID
            );
            toast.success('You have subscribed successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                city: ''
            });
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden py-5">
            <ToastContainer />
            <form className="w-full max-w-[450px] bg-gray-50 p-8 shadow-lg rounded-lg" data-aos="flip-right" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-500 font-serif">Subscribe To Get Your FreeWater</h2>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                        First name: <span className='text-red-500'>*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="first-name"
                        type="text"
                        placeholder="Enter your Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                        Last name: <span className='text-red-500'>*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="last-name"
                        type="text"
                        placeholder="Enter your Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email: <span className='text-red-500'>*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                        City: <span className='text-red-500'>*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        placeholder="Enter City Name"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 font-serif text-white text-lg font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-400 bg-slide-hover"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Subscribe;
