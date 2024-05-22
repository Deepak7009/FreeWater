import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Features() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div>
            <div className="flex flex-wrap justify-center text-center bg-gray-100 p-8 space-y-8 md:space-y-0 md:space-x-8 overflow-hidden"
            data-aos="">
                <div className="w-full md:w-1/2 lg:w-1/4 p-4" data-aos="zoom-in-up">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4"> 💵</div>
                        <h2 className="text-3xl font-semibold mb-2">Save Money</h2>
                        <p>Bottled water costs 2,000 times the price of tap water</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4" data-aos="zoom-in-up">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">🐙 </div>
                        <h2 className="text-3xl font-semibold mb-2">Eco Friendly</h2>
                        <p>Our goal is to be net positive by 2030</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4" data-aos="zoom-in-up">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">💧</div>
                        <h2 className="text-3xl font-semibold mb-2">Premium Water</h2>
                        <p>FreeWater is natural spring water and all of our containers are BPA free</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4" data-aos="zoom-in-up">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">🤲💙</div>
                        <h2 className="text-3xl font-semibold mb-2">Save Lives</h2>
                        <p>Ten cents from each beverage is donated to charity to build water wells for people in need</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
