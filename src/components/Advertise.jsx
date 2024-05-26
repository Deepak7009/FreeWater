import React, { useEffect } from 'react'
import img1 from "../img/WaterBottle5.png";
import img2 from "../images/img2.webp";
import bg from "../images/bg.svg";
import AdvertiseMid from "./AdvertiseMid";
import VideoSlider from "./VideoSlider";
import GetQuote from "./GetQuote";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './advertise.css'

const Advertise = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap mx-4 items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0" data-aos="fade-right">
            <img
              src={img1}
              alt="Advertise"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 flex flex-col justify-center" data-aos="fade-left">
            <div className="max-w-xs md:max-w-none mx-auto">
              <h1 className="text-2xl lg:text-[44px] font-bold leading-[1] mb-4 font-serif">
                PUT YOUR BRAND IN <br />
                EVERYONE’S HAND
              </h1>
              <p className="text-1xl lg:text-[25px] md:text-2xl mb-6">
                Receive meaningful impressions and utilize the greatest brand
                loyalty platform in the ad industry
              </p>
              <button className="bg-black font-serif text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 lg:text-[20px]">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-4 items-center">
          <div className="w-full mt-12 md:w-2/3 px-4" data-aos="fade-up">
            <h1 className="text-2xl lg:text-[45px] leading-[1] font-bold mb-4">
              Our product is a blank canvas
            </h1>
            <p className="text-1xl  lg:text-[25px] md:text-2xl mb-6">
              We are the opposite of traditional advertising because we are not
              annoying. Instead of making the audience cringe or run for cover,
              we put a smile on their face, and from that state of happiness is
              when they'll be excited to support your brand.
            </p>
            <div className="flex flex-wrap mt-12 mb-4">
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2 lg:text-[22px]">Use QR Codes</h3>
                <p className="lg:text-[20px]">
                  to connect anything on the internet, such as websites,
                  coupons, and videos
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2 lg:text-[22px]">
                  Sell or Freely Distribute
                </h3>
                <p className="lg:text-[20px]">
                  ad supported FreeWater in aluminum bottles and paper cartons
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2 lg:text-[22px]">
                  Choose a Distribution Model
                </h3>
                <p className="lg:text-[20px]">
                  if you want us to distribute it in Austin or ship it anywhere
                  in the lower 48 states
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-bold mb-2 lg:text-[22px]">
                  Subsidize or Cover the Entire Cost by Sharing the Ad Space
                </h3>
                <p className="lg:text-[20px]">
                  with non-competing brands</p>
              </div>
            </div>
            <div className="px-8">
              <button className="bg-black font-serif text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-4 lg:text-[20px]">
                Get A Quote
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4" data-aos="fade-down">
            <img
              src={img2}
              alt="Image"
              className="w-full h-[950px] rounded-lg"
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
        <h1 className="text-xl font-serif sm:text-2xl md:text-3xl lg:text-[50px] xl:text-[55px] font-bold mb-4 leading-[2]">
          It's a mini billboard in your hands
        </h1>
      </div>
      <VideoSlider />
      <GetQuote />
    </>
  );
};

export default Advertise;
