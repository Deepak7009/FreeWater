import React, { useEffect } from 'react'
import WaterBoy from '../img/water1.webp'
import WaterGirl from '../img/water2.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import bottles from "../img/WaterBottle4.png";

function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='overflow-hidden'>
            <section>
                <div className="flex justify-center flex-col md:flex-row items-center pr-8">
                    <div className="md:w-1/2 pl-4 py-5 flex justify-center" data-aos="fade-right">
                        <img
                            className="block mb-4"
                            src={bottles}
                            alt="Description"
                        />
                    </div>
                    <div className="md:w-1/2 py-4 md:pr-4 ml-5 max-w-[600px]  flex justify-center " data-aos="fade-up">

                        <p className="mb-4 text-xl px-2">
                            FreeWater is an innovative advertising platform that utilizes premium spring water as a new type of advertising medium while prioritizing philanthropy and sustainability. Ten cents from each beverage is donated to charity to
                            <span className='font-bold'> fight the global water crisis.</span> We only need 10% of Americans to choose FreeWater so we can solve the global water crisis permanently.
                        </p>

                    </div>

                </div>
            </section>


            <section>
                <div className="flex justify-center bg-gray-100 flex-col md:flex-row items-center p-8">
                    <div className="md:w-1/2 p-4 ml-5 max-w-[600px]" data-aos="fade-down">
                        <h2 className="text-2xl md:text-4xl font-bold mb-7">
                            We are partnered with WellAware
                        </h2>
                        <p className="mb-4 text-xl md:px-2">
                            We donate ten cents per beverage to WellAware, an Austin based non-profit that builds water wells in East Africa. Every 150 FreeWaters donates enough money to provide one person with a safe water source for the rest of their life.
                        </p>
                        <button className="bg-transparent hover:bg-gray-300 text-gray-800 font-semibold py-2 px-5 mt-6 text-xl border border-gray-400 rounded shadow transition duration-200 transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                    <div className="md:w-1/2 p-4" data-aos="fade-up">
                        <img
                            src={WaterBoy}
                            alt="A child drinking water from a tap"
                            className="w-full max-w-[600px] rounded-3xl h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-12">
                <div className="flex justify-center flex-col md:flex-row items-center p-8">

                    <div className="md:w-1/2 p-4" data-aos="fade-right">
                        <img
                            src={WaterGirl}
                            alt="A child drinking water from a tap"
                            className="w-full max-w-[600px] h-auto object-cover rounded-3xl shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 p-4 ml-5 max-w-[600px] " data-aos="fade-left">
                        <h2 className="text-2xl md:text-4xl font-bold mb-7">
                            Charity : Water
                        </h2>
                        <p className="mb-4 text-xl md:px-2">
                            They work exclusively with local partners who build sustainable, community-owned water projects. Their partners also facilitate comprehensive water, sanitation, and hygiene programming to protect everyone’s long-term health.
                        </p>
                        <div className='flex justify-center items-center'>
                            <button className="bg-transparent hover:bg-gray-300 mt-8 text-gray-800 font-semibold py-2 px-5 text-xl border border-gray-400 rounded shadow transition duration-200 transform hover:scale-105">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    )
}

export default About
