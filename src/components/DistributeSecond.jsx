import React from "react";
import bottle from "../images/bottle1.webp";
const DistributeSecond = () => {
  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1050px] mx-auto px-[12px]">
        <div className="flex lg:flex-row  flex-wrap flex-col">
          <div className="lg:w-3/5 w-full flex justify-center">
            <img className="h-[380px]" src={bottle} alt="bottle" />
            <img
              className="h-[380px] sm:block hidden"
              src={bottle}
              alt="bottle"
            />
            <img
              className="h-[380px] lg:block hidden"
              src={bottle}
              alt="bottle"
            />
          </div>
          <div className="lg:w-2/5 text-center lg:text-start ps-[24px]">
            <div className=" mt-[20px]">
              <p className=" capitalize font-semibold text-[25px] text-black">
                Increase Foot Traffic
              </p>
              <p className=" capitalize opacity-[.8]">
                By giving away a product that everyone wants
              </p>
            </div>{" "}
            <div className=" mt-[30px] md:mt-[70px]">
              <p className=" capitalize font-semibold text-[25px] text-black">
                Improve Sales
              </p>
              <p className=" capitalize opacity-[.8]">
                By advertising the product in your store
              </p>
            </div>{" "}
            <div className="mt-[30px] md:mt-[70px]">
              <p className=" capitalize font-semibold text-[25px] text-black">
                gain amazing PR
              </p>
              <p className=" capitalize opacity-[.8]">
                for helping a great cause
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributeSecond;
