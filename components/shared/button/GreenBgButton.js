import React from "react";

const GreenBgButton = ({ children }) => {
  return (
    <button className="bg-green-200 text-white py-3 px-6 rounded-[5px] font-poppins font-medium ">
      {children}
    </button>
  );
};

export default GreenBgButton;
