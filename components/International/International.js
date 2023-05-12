import React from "react";
import DestinationCard from "./DestinationCard";

const International = () => {
  return (
    <div>
      <h2 className="font-poppins font-semibold text-[36px] text-primary text-center">
        Trending International Destinations
      </h2>
      <p className="font-poppins font-medium text-base text-secondary text-center">
        The world is now just a hop, skip and jump away and here’s how you can
        make your travel easier and better.{" "}
      </p>
      <div className="flex justify-end py-3 rounded-[5px]">
        <div className="bg-blue-100 flex gap-x-[14px] p-1">
          <img src="/assets/icons/arrowright.png" />
          <img src="/assets/icons/arrowleft.png" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-x-[30px]">
        <DestinationCard
          image="/assets/places/dubai.png"
          title="Dubai: The city of life"
          days="4"
          cost="27,500Tk"
        />
        <DestinationCard
          image="/assets/places/dubai.png"
          title="Dubai: The city of life"
          days="4"
          cost="27,500Tk"
        />
        <DestinationCard
          image="/assets/places/dubai.png"
          title="Dubai: The city of life"
          days="4"
          cost="27,500Tk"
        />
      </div>
    </div>
  );
};

export default International;
