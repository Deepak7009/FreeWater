import React from "react";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import bg from "../images/bg.svg";
import AdvertiseMid from "./AdvertiseMid";
import VideoSlider from "./VideoSlider";
import GetQuote from "./GetQuote";
// import './advertise.css'

const Advertise = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap mx-4 items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src={img1}
              alt="Advertise"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
            <div className="max-w-xs md:max-w-none mx-auto">
              <h1 className="text-2xl lg:text-[44px] font-bold leading-[1] mb-4">
                PUT YOUR BRAND IN <br />
                EVERYONE’S HAND
              </h1>
              <p className="text-1xl md:text-2xl mb-6">
                Receive meaningful impressions and
                <br /> utilize the greatest brand loyalty platform
                <br /> in the ad industry
              </p>
              <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-4 items-center">
          <div className="w-full md:w-2/3 px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Our product is a blank canvas
            </h1>
            <p className="text-1xl md:text-2xl mb-6">
              We are the opposite of traditional advertising because we are not
              annoying. Instead of making the audience cringe or run for cover,
              we put a smile on their face, and from that state of happiness is
              when they'll be excited to support your brand.
            </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2">Use QR Codes</h3>
                <p>
                  to connect anything on the internet, such as websites,
                  coupons, and videos
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2">
                  Sell or Freely Distribute
                </h3>
                <p>
                  ad supported FreeWater in aluminum bottles and paper cartons
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2">
                  Choose a Distribution Model
                </h3>
                <p>
                  if you want us to distribute it in Austin or ship it anywhere
                  in the lower 48 states
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2">
                  Subsidize or Cover the Entire Cost by Sharing the Ad Space
                </h3>
                <p>with non-competing brands</p>
              </div>
              <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Get A Quote
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <img
              src={img2}
              alt="Image"
              className="w-full h-[900px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="midbg relative bg-black mt-12 pb-12 pt-10">
        <img
          src={bg}
          alt="Image"
          className="w-full absolute -top-36 hidden md:block"
        />
        <AdvertiseMid />
      </div>
      <div className="container mx-auto flex items-center justify-center p-4 md:p-8 lg:p-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-[2]">
          It's a mini billboard in your hands
        </h1>
      </div>
      <VideoSlider />
      <GetQuote />
    </>
  );
};

export default Advertise;
