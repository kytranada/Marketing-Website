import React, { useState } from "react";

const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className={`bg-[#ffffff] cursor-pointer rounded hover:text-pastel-blue border-l-2 ${
          show ? "border-pastel-coral shadow-sm" : "border-pastel-lavender/30"
        } transition-all duration-300`}
      >
        <button
          className={`flex justify-between items-center w-full p-4 ${
            show ? "text-pastel-coral font-medium" : ""
          }`}
        >
          <span>{question}</span>
          <span className="transition-all duration-300">
            {show ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            )}
          </span>
        </button>
        {/* answer */}
        <div className="text-gray-700 overflow-hidden transition-all duration-300">
          {show ? (
            <p className="pb-4 px-5 bg-pastel-white/50 border-t border-pastel-lavender/10">
              {answer}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Accordian;
