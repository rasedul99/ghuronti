import React from "react";

const PlaceCard = ({ image, title, cost }) => {
  return (
    <div>
      <img
        src="/assets/places/cox.png"
        className="max-w-[255px] max-h-[207px]"
      />
      <div className="flex justify-between  font-poppins font-medium text-xl text-primary bg-blue-100 py-3 px-5">
        <p>Cox Bazar</p>
        <p>1500tk</p>
      </div>
    </div>
  );
};

export default PlaceCard;
