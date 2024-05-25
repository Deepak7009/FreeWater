import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bottle from '../img/Bottle1.webp';
import { Link } from 'react-router-dom';


function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <div className='container-fluid mx-auto py-20 px-4 bg-gradient-to-r from-gray-400 to-gray-500 overflow-hidden'>
                <div className='flex justify-center items-center text-center' data-aos="flip-right">
                    <div>
                        <h1 className='text-4xl font-bold text-white'>
                            Put Your Brand In Everyone's Hand!
                        </h1>
                        <div className='my-10'>
                            <Link to ="/advertise" className='text-2xl py-3 px-8 bg-white text-blue-500 border border-blue-500 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300'>
                                Advertise With Us
                            </Link>
                        </div>
                        <div>
                            <img src={Bottle} alt='Brand Bottle' className='mx-auto mt-10 rounded-lg shadow-2xl' style={{ maxWidth: '400px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
