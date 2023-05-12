import React from "react";

const FlyingInput = ({ title }) => {
  return (
    <div className="w-[418px] bg-white border border-green-200 rounded-[5px] pl-[18px] py-[15px] text-base">
      <p className="font-poppins font-medium  text-primary text-left">
        {title}
      </p>
      <input
        type="text"
        placeholder="City or Airport"
        className="outline-none w-full"
      />
    </div>
  );
};

export default FlyingInput;
