import React, { useEffect } from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa"; // Added TikTok icon
// aos
import AOS from "aos";
import "aos/dist/aos.css";
// Removed Link import as it's no longer used for services

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="md:grid md:grid-cols-2 gap-8 p-5 md:px-16 lg:px-32 py-10 text-[#7FB3D5]"> {/* Adjusted grid and padding */}
      {/* Company Info & Contact */}
      <div data-aos="fade-right">
        <h1 className="text-2xl font-semibold mb-3">Joy Marketing Media</h1> {/* Updated company name and style */}
        <div>
          <p className="font-medium text-lg">
            Contact Us
          </p>
          <a href="mailto:Contact@joymarketingmedia.com" className="text-base hover:text-pastel-blue">
            Contact@joymarketingmedia.com
          </a>
        </div>
      </div>

      {/* Follow Us */}
      <div data-aos="fade-left" data-aos-delay="300" className="mt-10 md:mt-0"> {/* Adjusted delay and fade direction */}
        <h1 className="text-xl font-semibold mb-3">Follow Us</h1> {/* Styled heading */}
        <div className="flex space-x-4 mt-3"> {/* Adjusted spacing and removed justify-between */}
          <a href="https://www.tiktok.com/@joymarketingmedia?lang=en" target="_blank" rel="noopener noreferrer" className="border border-zinc-400 p-2 rounded-full hover:border-pastel-blue hover:text-pastel-blue">
            <FaTiktok size={"24px"} /> {/* TikTok Icon */}
          </a>
          <a href="https://www.instagram.com/joy_marketing_media/" target="_blank" rel="noopener noreferrer" className="border border-zinc-400 p-2 rounded-full hover:border-pastel-blue hover:text-pastel-blue">
            <IoLogoInstagram size={"24px"} />
          </a>
          <a href="https://www.facebook.com/people/Joy-Marketing/100071334802790/" target="_blank" rel="noopener noreferrer" className="border border-zinc-400 p-2 rounded-full hover:border-pastel-blue hover:text-pastel-blue">
            <IoLogoFacebook size={"24px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
