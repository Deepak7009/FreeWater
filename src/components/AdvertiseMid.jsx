import React from "react";
import mess from "../images/mess.webp";
import coin from "../images/coin.webp";
import boost from "../images/boost.webp";
import child from "../images/child.webp";

const AdvertiseMid = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center  text-white">
      <div className="p-12 mx-12 rounded-lg flex flex-col items-center">
        <img src={mess} alt="Image 1" className="w-24 h-auto mb-2" />
        <span className="text-lg font-bold block mb-2">10X</span>
        <p className="text-sm text-center">more impressions than direct mail</p>
      </div>
      <div className="p-10 mx-12 rounded-lg flex flex-col items-center">
        <img src={coin} alt="Image 2" className="w-24 h-auto mb-2" />
        <span className="text-lg font-bold block mb-2">$2.50</span>
        <p className="text-sm text-center">
          cheaper per ten impressions than direct mail
        </p>
      </div>
      <div className="p-12 rounded-lg flex flex-col items-center">
        <img src={boost} alt="Image 3" className="w-24 h-auto mb-2" />
        <span className="text-lg font-bold block mb-2">29%</span>
        <p className="text-sm text-center">return on investment</p>
      </div>
      <div className="p-12 rounded-lg flex flex-col items-center">
        <img src={child} alt="Image 4" className="w-24 h-auto mb-2" />
        <span className="text-lg font-bold block mb-2">Priceless</span>
        <p className="text-sm text-center">
          saving lives and helping the planet
        </p>
      </div>
    </div>
    </>
  );
};

export default AdvertiseMid;
