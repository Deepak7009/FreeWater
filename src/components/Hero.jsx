import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Bottle from '../img/WaterBottles3.png'

function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <div className='container-fluid mx-auto py-20 px-4 overflow-hidden'>
                <div className='flex justify-center items-center text-center' data-aos="flip-right">
                    <div>
                        <h1 className='text-4xl font-bold'>
                            Put Your Brand In Everyone's Hand!
                        </h1>
                        <div className='my-10'>
                            <Link to="/advertise"
                                className='text-2xl font-serif py-3 px-8 bg-white text-blue-500 border border-blue-500 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300'>
                                Advertise With Us
                            </Link>
                        </div>
                        <div>
                            <img
                                src={Bottle}
                                alt='Brand Bottle'
                                className='mx-auto mt-10 rounded p-4' style={{ maxWidth: '450px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
