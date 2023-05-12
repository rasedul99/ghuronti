"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomerSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className=" bg-blue-100 py-[60px]">
      <p className="font-poppins font-normal text-xl text-primary text-center ">
        Your thoughtfulness and support of Ghuronti is very much appreciated.
        You are a very dear friend to the Chamber, and I want to assure you that
        your confidence in Ghuronti will be justified.
      </p>
      <p className="font-poppins font-normal text-xl text-primary text-center">
        Your thoughtfulness and support of Ghuronti is very much appreciated.
        You are a very dear friend to the Chamber, and I want to assure you that
        your confidence in Ghuronti will be justified.
      </p>
      <p className="font-poppins font-normal text-xl text-primary text-center">
        Your thoughtfulness and support of Ghuronti is very much appreciated.
        You are a very dear friend to the Chamber, and I want to assure you that
        your confidence in Ghuronti will be justified.
      </p>
      <p className="font-poppins font-normal text-xl text-primary text-center">
        Your thoughtfulness and support of Ghuronti is very much appreciated.
        You are a very dear friend to the Chamber, and I want to assure you that
        your confidence in Ghuronti will be justified.
      </p>
    </Slider>
  );
};

export default CustomerSlider;
