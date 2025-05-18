import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"What marketing services does Joy Marketing Media offer?"}
          answer={
            "Joy Marketing Media offers a comprehensive suite of marketing services including paid social advertising, social media management, app development, web development, SEO optimization, and campaign creation. We tailor our services to help small businesses create authentic connections with their audiences."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"How can small businesses benefit from your marketing services?"}
          answer={
            "Small businesses can leverage our expertise to establish a strong online presence, reach their target audience effectively, and drive growth. Our team combines branding, social media, and data analysis to create marketing strategies that are both authentic and results-driven."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"What makes Joy Marketing Media different from other marketing agencies?"}
          answer={
            "Our focus is on bringing joy to marketing for small businesses. We believe in creating authentic connections between businesses and their audiences, rather than just driving metrics. Our team of specialists combines branding, social media expertise, and data analysis to deliver marketing that resonates."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"How do you approach web and app development projects?"}
          answer={
            "We approach development projects with both aesthetics and functionality in mind. Our web and app development services focus on creating user-friendly, responsive designs that reflect your brand identity while delivering an exceptional user experience."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
        <Accordian
          question={"What is your process for SEO optimization?"}
          answer={
            "Our SEO optimization process begins with a thorough analysis of your current online presence, followed by keyword research, on-page optimization, content strategy development, and ongoing monitoring. We focus on sustainable, white-hat SEO practices that build long-term visibility."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"How do you measure the success of marketing campaigns?"}
          answer={
            "We establish clear KPIs at the beginning of each campaign based on your business objectives. Our data-driven approach allows us to track performance, provide transparent reporting, and make real-time adjustments to maximize results."
          }
        />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
