import React from "react";
import PlaceCard from "./PlaceCard";

const Places = () => {
  return (
    <div className="">
      <p className="font-poppins font-semibold text-xl md:text-[36px] mb-[35px] mt-4 md:mt-[111px] text-primary text-center">
        Best Places To Visit In Bangladesh
      </p>
      <div className="flex flex-col md:flex-row gap-y-2 justify-between">
        <div className="basis-1/2 max-w-[540px]">
          <img src="/assets/places/cox.png" className="w-full max-h-[280px]" />
          <div className="flex justify-between  font-poppins font-medium text-base md:text-xl text-primary bg-blue-100 py-3 px-5">
            <p>Cox Bazar</p>
            <p>1500tk</p>
          </div>
        </div>
        <div className="basis-1/2">
          <p className="font-poppins font-medium text-sm md:text-base text-secondary text-justify">
            Bangladesh is a South Asian country with a rich cultural heritage
            and natural beauty. It is home to the world's largest mangrove
            forest, culture, and natural beauty.
          </p>
          <div className="flex justify-end py-3 rounded-[5px]">
            <div className="bg-blue-100 flex gap-x-[14px] p-1">
              <img src="/assets/icons/arrowright.png" />
              <img src="/assets/icons/arrowleft.png" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px]">
            <PlaceCard
              image="/assets/places/cox.png"
              title="Coxs Bazar"
              cost="1500Tk"
            />
            <PlaceCard
              image="/assets/places/cox.png"
              title="Coxs Bazar"
              cost="1500Tk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
