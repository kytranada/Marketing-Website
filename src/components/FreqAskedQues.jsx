import React, { useEffect } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import Faquestions from "./Faquestions";

const FreqAskedQues = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="text-[#7FB3D5]">
      <h1 className="text-3xl font-semibold text-center">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#7FB3D5] h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-600 text-center mt-7 mb-10 text-lg">
        Common questions about our marketing services and how we help small businesses succeed
      </p>

      {/* Accordian */}
      <div data-aos="fade-right">
        <Faquestions />
      </div>
    </div>
  );
};

export default FreqAskedQues;
