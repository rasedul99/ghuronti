import React from "react";

const TicketOption = ({ image, title }) => {
  return (
    <div className="py-[23px] px-8 flex items-center gap-x-2">
      <img src={image} className="w-10 h-10" />
      <p className="font-poppins font-medium text-xl">{title}</p>
    </div>
  );
};

export default TicketOption;
