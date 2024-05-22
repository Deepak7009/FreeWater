import React from "react";
import Slider from "react-slick";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import bottle1 from "../images/bottle1.webp";
import bottle2 from "../images/bottle2.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slides = [
    {
      image: bottle1,
      title:
        " It's a really powerful tool. When they go to market with big events, like the ones we experienced with FreeWater, it was a great experience",
      description: "Brent Foley Managing Director, Dollarzing",
    },
    {
      image: bottle1,
      title:
        "I advertised on 1/3 of the label on a pallet of aluminum water and sold a house! Now I'm on the front of 45,000 cartons of water. ",
      description: "Hasan Yacoub, Realtor ",
    },
    {
      image: bottle1,
      title:
        "We got such large media coverage from FreeWater because it's more innovative than some of the other more traditional marketing materials. ",
      description: "Mason King CEO, Jubilee Jobs of Lexington ",
    },
    {
      image: bottle1,
      title:
        "In terms of both brand awareness and quantifiable data, FreeWater has tremendously helped our brand reach our goals.",
      description: "Patrick H. Matlack CCO, Mindgrasp",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2   ">
          <div className="flex flex-col items-center ">
            <video
              className="hidden md:block w-full max-h-[500px]  mb-4"
              src={video1}
              autoPlay
              loop
              muted
            ></video>
            <img
              className="block md:hidden w-full h-auto mb-4"
              src={bottle1}
              alt="Description"
            />
            <h3 className="text-2xl font-bold mb-2 lg:text-[30px]">
              Paper Carton
            </h3>
            <span className="text-lg mb-4">16 fl oz / 474ml</span>
            <button className="bg-white border border-black text-black py-1 px-4 lg:text-[20px]">
              Get A Quote
            </button>
          </div>
          <div className="flex flex-col items-center">
            <video
              className="hidden md:block w-full  max-h-[500px] mb-4"
              src={video2}
              autoPlay
              loop
              muted
            ></video>
            <img
              className="block md:hidden w-full h-auto mb-4"
              src={bottle2}
              alt="Description"
            />
            <h3 className="text-2xl font-bold mb-2 lg:text-[30px]">
              Alumi-Tec Bottle
            </h3>
            <span className="text-lg mb-4">16.9 fl oz / 500ml</span>
            <button className="bg-white border border-black text-black py-2 px-4 lg:text-[20px]">
              Get A Quote
            </button>
          </div>
        </div>
        <div className=" max-w-[980px] mx-auto pt-[70px]">

          <h1 className=" py-4 font-bold text-4xl">
            Discover the success stories of our satisfied clients.
          </h1>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="!flex !md:flex-row flex-wrap  w-full  md:justify-start justify-center  "
              >

                <div className="md:w-1/2 flex items-center justify-center">
                  <div className="border-[3px] border-blue-400 rounded-[20px] p-8">
                    <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-lg mb-4">{slide.description}</p>
                  </div>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[400px] ml-auto h-[400px]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default VideoSlider;
