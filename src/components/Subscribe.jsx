import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Subscribe() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
            <form className="w-full max-w-[450px] bg-gray-50 p-8 shadow-lg rounded-lg" data-aos="flip-right">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Subscribe To Get Your FreeWater</h2>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                        First name: *
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="first-name"
                        type="text"
                        placeholder=" Enter your Name"
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
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline transition duration-200"
                        type="button"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Subscribe;
