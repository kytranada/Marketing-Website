import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="text-[#7FB3D5]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Our Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#7FB3D5] h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-600 text-center mt-7 mb-10 text-lg px-4 md:px-16">
        We are committed to elevating your brand's presence in the digital world. We want to make it easier for you to get in front of your audience. From building up your social media page to running paid campaigns for a new product launch, we are there to build your brand's presence by building a relationship with your audience. Our team combines creativity with authenticity and data-driven insights to deliver impactful results, fostering growth and enhancing your brand's connection with its audience.
      </p>
      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10"
        data-aos="fade-up"
      >
        <div onClick={() => navigate("/PaidSocialAdvertising")} className="cursor-pointer">
          <Card
            img={<HiOutlineChartPie />} // Consider changing icon if appropriate
            title={"Paid Social Advertising"}
            desc={
              "We specialize in maximizing your brand's impact and reaching the right audience through targeted paid social advertising. Leveraging platforms like Facebook, Instagram, and TikTok, we craft campaigns that resonate with your audience and deliver measurable results."
            }
          />
        </div>

        <div onClick={() => navigate("/SocialMediaManagement")} className="cursor-pointer">
          <Card
            img={<HiOutlineChartPie />} // Consider changing icon if appropriate
            title={"Social Media Management"}
            desc={
              "Our approach is centered on building meaningful connections and ensuring your brand's message resonates organically. We amplify your presence and engage your audience. We create authentic and compelling messages that speaks to your audience, fostering community and driving organic growth."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
