import React from "react";

const DistributeInfo = () => {
  return (
    <>
      <div className="max-w-[682px] mx-auto px-[12px] pt-[50px]">
        <div className="border-solid p-[24px] sm:p-[50px] rounded-sm  border-[1px] border-[#62606076] ">
          <p className=" font-medium text-[25px] sm:text-[40px] text-center text-black">
            Distribute FreeWater
          </p>
          <form action="">
            <p className=" mt-[50px] text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              First name:
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Last name:
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Email:
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type=" email"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Phone Number
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="number"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Company name
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Type of business
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Distribution point address
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Shipping address if it is different than the distribution point
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Daily foot traffic
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="number"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Age range
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              How many beverages do you want to distribute monthly?
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <p className=" mt-[30px] leading-[1.3em] mb-2 text-[18px] sm:text-[25px] text-black  opacity-[.8]">
              Why do you want to distribute FreeWater?
            </p>
            <input
              required
              className=" w-full py-3 outline-none border-[2px] border-solid border-transparent rounded-md px-3 hover:border-black bg-[#87838346]"
              type="text"
            />
            <button className=" mt-[25px] px-[30px] rounded-md py-[13px] bg-slate-900 text-white border-2 border-solid  border-slate-900 ">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DistributeInfo;
