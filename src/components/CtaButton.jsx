import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-pastel-blue hover:bg-pastel-blue-dark hover:shadow hover:shadow-pastel-blue text-lg text-pastel-white rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      {name}
    </button>
  );
};

export default CtaButton;
