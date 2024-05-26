import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

function Subscribe() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const handleSubmit = async () => {
        const subscribeData
         = {
            name: firstName,
            lastName,
            email,
            city
        };

        try {
            const response = await axios.post('http://localhost:5000/subscribe', subscribeData
                
            );

            if (response.status === 201) {
                alert('Customer added successfully!');
                setFirstName('');
                setLastName('');
                setEmail('');
                setCity('');
            } else {
                alert('Failed to add customer. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden py-5">
            <form className="w-full max-w-[450px] bg-gray-50 p-8 shadow-lg rounded-lg" data-aos="flip-right" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Subscribe To Get Your FreeWater</h2>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                        First name: *
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="first-name"
                        type="text"
                        placeholder="Enter your Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                        Last name: *
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="last-name"
                        type="text"
                        placeholder="Enter your Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email: *
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                        City: *
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        placeholder="Enter City Name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 text-white text-lg font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-400 bg-slide-hover"
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
