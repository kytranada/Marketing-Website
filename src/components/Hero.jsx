import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/hero-img.svg";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// import video
import video from "../img/video/funny.mp4";

const Hero = () => {
  const myElement = useRef(null);

  useEffect(() => {
    gsap.to(myElement.current, {
      duration: 2,
      y: -100,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative bg-pastel-white">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-pastel-blue md:text-5xl text-3xl font-semibold">
          Joyful Marketing,<br></br> Happy Results!
        </h1>
        <p className="text-xl mt-5 text-gray-400 primary-font">
          <i>Bringing the joy to marketing for small businesses. <br></br>
          Engage with your audience, build your brand, and increase revenue!</i>
        </p>
        <p className="text-lg mt-3 text-gray-700 primary-font">
          Marketing used to be about getting your product in front of people with problems. Today, it's more than that! It's not just about your product, but the brand behind it. It's about being bold and authentic. We specialize in creating marketing campaigns that showcase your unique qualities, set you apart, and create deep connections.
        </p>
        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <a href="#contact" className="">
            <CtaButton name={"Book a Call"} />
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
        <img ref={myElement} className="w-full animate" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
