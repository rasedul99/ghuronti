import React from "react";
import GreenBgButton from "../shared/button/GreenBgButton";

const DestinationCard = ({ image, title, days, cost }) => {
  return (
    <div className="bg-white shadow-md rounded-[5px] px-3 py-[15px] ">
      {" "}
      <img src={image} alt={title} className="max-w-[325px]" />
      <div className="flex justify-between font-poppins font-medium text-primary my-[6px]">
        <h3 className="text-xl">{title}</h3>
        <p className="text-base bg-blue-100  p-1">{days} days</p>
      </div>
      <p className="text-primary text-base mb-6">
        <span className="text-green-200">Starts From </span>
        {cost}
      </p>
      <div className="text-center">
        <GreenBgButton>View Details</GreenBgButton>
      </div>
    </div>
  );
};

export default DestinationCard;
