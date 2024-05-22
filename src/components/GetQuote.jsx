import React from "react";

const GetQuote = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-8 px-4 bg-gray-100 mt-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">Get a Quote</h1>
        <form className="bg-white p-6 rounded-lg shadow-md w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block mb-1 text-lg font-bold">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1 text-lg font-bold">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-lg font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 text-lg font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block mb-1 text-lg font-bold">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessType" className="block mb-1 text-lg font-bold">
              Type of Business
            </label>
            <input
              type="text"
              id="businessType"
              name="businessType"
              className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="advertising" className="block mb-1 text-lg font-bold">
              What do you want to advertise?
            </label>
            <input
              type="text"
              id="advertising"
              name="advertising"
              className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="budget" className="block mb-1 text-lg font-bold">
              What is your budget?
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              className="form-input w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 text-lg font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea w-full border-2 border-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            ></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="recaptcha"
              name="recaptcha"
              className="form-checkbox border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
            <label htmlFor="recaptcha" className="ml-2 text-lg font-bold">
              I'm not a robot
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
