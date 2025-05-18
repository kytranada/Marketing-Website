import React, { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/about-img.svg";
import { BsPeople } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// import video
import video from "../img/video/funny.mp4";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    video.currentTime = 0;
    video.load();
    setShow(true);
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    video.pause();
    setShow(false);
  };

  return (
    <div className="relative lg:mx-32">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7FB3D5]"
      >
        About Us
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-[#7FB3D5] h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
        >
          <img className="w-full" src={img} alt="img" />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
            <h2 className="text-[#7FB3D5] md:text-3xl font-semibold">
              Get to Know Us
            </h2>
            <p className="text-lg mt-5 text-gray-600 primary-font">
              We're a team of marketing specialists who have experience in high-performing start-ups and established marketing agencies. We help business owners making marketing easier. We do the hard part so that you can focus on what matters, your business!
            </p>
            <p className="text-lg mt-3 text-gray-600 primary-font">
              Based on what your goals and needs are, we combine branding, social media, and data analysis to increase awareness, reputation, trust - and most of all, sales.
            </p>
          </div>

          {/* <div
            className={`${
              show ? "block" : "hidden"
            } absolute right-0 top-0 lg:w-full lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}
          >
            <div
              onClick={() => clickHandler()}
              className="absolute right-10 top-6 text-3xl font-light bg-zinc-700 px-3 rounded-full text-white cursor-pointer"
            >
              x
            </div>
            <video
              id="video"
              muted
              controls
              autoPlay
              className="w-[800px] rounded"
              src={video}
            ></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
