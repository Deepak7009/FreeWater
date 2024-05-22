import React from "react";
import mess from "../images/mess.webp";
import coin from "../images/coin.webp";
import boost from "../images/boost.webp";
import child from "../images/child.webp";

const AdvertiseMid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center  text-white">
        <div className="p-12  rounded-lg flex flex-col items-center">
          <img src={mess} alt="Image 1" className="w-24 h-auto mb-2" />
          <span className="text-lg font-bold block mb-2 lg:text-[50px]">
            10X
          </span>
          <p className="text-sm text-center lg:text-[15px] mt-2 sm:mt-6">
            more impressions than direct mail
          </p>
        </div>
        <div className="p-10 rounded-lg flex flex-col items-center">
          <img src={coin} alt="Image 2" className="w-24 h-auto mb-2" />
          <span className="text-lg font-bold block mb-2 lg:text-[50px]">
            $2.50
          </span>
          <p className="text-sm text-center lg:text-[15px] mt-2 sm:mt-6">
            cheaper per ten impressions than direct mail
          </p>
        </div>
        <div className="p-12 rounded-lg flex flex-col items-center">
          <img src={boost} alt="Image 3" className="w-24 h-auto mb-2" />
          <span className="text-lg font-bold block mb-2 lg:text-[50px]">
            29%
          </span>
          <p className="text-sm text-center lg:text-[15px] mt-2 sm:mt-6">
            return on investment
          </p>
        </div>
        <div className="p-12 rounded-lg flex flex-col items-center">
          <img src={child} alt="Image 4" className="w-24 h-auto mb-2" />
          <span className="text-lg font-bold block mb-2 lg:text-[50px]">
            Priceless
          </span>
          <p className="text-sm text-center lg:text-[15px] mt-2 sm:mt-6">
            saving lives and helping the planet
          </p>
        </div>
      </div>
    </>
  );
};

export default AdvertiseMid;
