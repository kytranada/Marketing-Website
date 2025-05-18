import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CtaButton from "./CtaButton";
import { useNavigate } from "react-router-dom";
import logoImg from "../img/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font bg-pastel-white border-b border-pastel-lavender/30">
      {/* logo */}
      <a
        href="/Marketing-Website/"
        className="flex items-center"
      >
        <img src={logoImg} alt="Joy Marketing" className="h-24 lg:h-28" />
      </a>
      {/* menu */}
      <div className="lg:flex items-center justify-between lg:gap-10 hidden"> {/* Adjusted gap */}
        <a
          href="/Marketing-Website/"
          className="text-pastel-blue hover:text-pastel-coral text-lg tracking-wide font-light"
        >
          Home
        </a>
        {/* About link removed */}
        <a
          href="/Marketing-Website/#services"
          className="text-pastel-blue hover:text-pastel-yellow text-lg tracking-wide font-light"
        >
          Services
        </a>
        {/* Portfolio link removed */}
        <a
          href="/Marketing-Website/#contact"
          className="text-pastel-blue hover:text-pastel-mint text-lg tracking-wide font-light"
        >
          Contact
        </a>

        {/* CTA */}
        <a href="/Marketing-Website/#contact" className="">
          <CtaButton name={"Book a Call"} /> {/* Updated CTA text */}
        </a>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} className="text-pastel-lavender" />
      </div>

      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-pastel-white border border-pastel-lavender/20 transition-all duration-300">
          <a
            href="/Marketing-Website/"
            className="text-pastel-blue hover:text-pastel-coral text-lg tracking-wide font-light"
          >
            Home
          </a>
          {/* About link removed */}
          <a
            href="/Marketing-Website/#services"
            className="text-pastel-blue hover:text-pastel-yellow text-lg tracking-wide font-light"
          >
            Services
          </a>
          <a
            href="/Marketing-Website/#contact"
            className="text-pastel-blue hover:text-pastel-mint text-lg tracking-wide font-light"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="/Marketing-Website/#contact"
            className="mt-2 ml-2 flex justify-center items-center"
          >
            <CtaButton name={"Book a Call"} /> {/* Updated CTA text */}
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
