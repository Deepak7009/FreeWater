import React from "react";

const GetQuote = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-8 px-4 bg-gray-100 mt-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Get a Quote</h1>
        <form className="bg-white p-8 rounded-lg shadow-xl w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-lg font-bold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-lg font-bold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-lg font-bold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="company" className="block mb-2 text-lg font-bold text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="businessType" className="block mb-2 text-lg font-bold text-gray-700">
              Type of Business
            </label>
            <input
              type="text"
              id="businessType"
              name="businessType"
              className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="advertising" className="block mb-2 text-lg font-bold text-gray-700">
              What do you want to advertise?
            </label>
            <input
              type="text"
              id="advertising"
              name="advertising"
              className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="budget" className="block mb-2 text-lg font-bold text-gray-700">
              What is your budget?
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-lg font-bold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
            ></textarea>
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="recaptcha"
              name="recaptcha"
              className="form-checkbox border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-inner"
            />
            <label htmlFor="recaptcha" className="ml-2 text-lg font-bold text-gray-700">
              I'm not a robot
            </label>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
