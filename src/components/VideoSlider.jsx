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
      title: "Slide 1",
      description: "Description for slide 1",
    },
    {
      image: bottle1,
      title: "Slide 2",
      description: "Description for slide 2",
    },
    {
      image: bottle1,
      title: "Slide 3",
      description: "Description for slide 3",
    },
    {
      image: bottle1,
      title: "Slide 4",
      description: "Description for slide 4",
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
          <h1 className=" py-4">
            Discover the success stories of our satisfied clients.
          </h1>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="!flex !md:flex-row flex-wrap  w-full  md:justify-start justify-center  "
              >
                <div className=" md:w-1/2 ">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-lg mb-4">{slide.description}</p>
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
