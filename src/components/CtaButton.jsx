import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-gradient-to-r from-pastel-coral to-pastel-lavender hover:from-pastel-lavender hover:to-pastel-coral hover:shadow hover:shadow-pastel-lavender text-lg text-pastel-white rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      {name}
    </button>
  );
};

export default CtaButton;
