import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DistributeHome = () => {

   useEffect(() => {
      AOS.init({
         duration: 2000,
      });
   }, []);

   return (
      <section className="distribute_home_bg" data-aos="fade-down">
         <div className="px-10 mx-auto">
            <div className="lg:w-[40%] py-5 md:py-[80px]">
               <h2 className="leading-[1.1em] font-bold text-white text-5xl md:text-7xl">
                  Distribute FreeWater
               </h2>
               <p className="font-semibold mt-4 text-white mb-0 pb-5 text-xl md:text-3xl">
                  Whether it's an event or for your business, we have many different
                  options for you!
               </p>
            </div>
         </div>
      </section>
   );
};

export default DistributeHome;
