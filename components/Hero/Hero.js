import React from "react";
import Ticket from "./Ticket";
import FlyingInput from "./FlyingInput";

const Hero = () => {
  return (
    <div className="max-w-[1105px] mx-auto rounded-[42px]">
      <div className="font-poppins font-semibold text-[32px] text-primary mt-[37px] text-center">
        Welcome to Ghuronti! Find Flights, Hotels & Tour Packages
        <Ticket />
        <div className="flex flex-col gap-y-[22px] mt-5 mb-8">
          <div className="w-[465px] mx-auto bg-white border border-green-200 rounded-[5px] flex justify-between px-[18px]  font-poppins font-medium text-base">
            <p className="py-[10px]">One Way</p>
            <p className="py-[10px] border-b-[3px] border-green-200">
              Round Trip
            </p>
            <p className="py-[10px]">Multi City</p>
          </div>
          <div className="flex justify-center gap-x-10">
            <FlyingInput title="Flying From" />
            <FlyingInput title="Flying To" />
          </div>
          <div className="flex justify-center gap-x-10">
            <div className="max-w-[418px] bg-white border border-green-200 rounded-[5px]   text-base flex">
              <div className="border-r border-green-200 py-[15px] pl-4 pr-[10px]">
                <div className="flex justify-between  ">
                  <p className="font-poppins font-medium  text-primary text-left">
                    Depart To
                  </p>
                  <p>Sun</p>
                </div>
                <input
                  type="text"
                  placeholder="18 Mar 2023"
                  className="outline-none w-full"
                />
              </div>
              <div className="border-l border-green-200 py-[15px] pl-4 pr-[10px]">
                <div className="flex justify-between">
                  <p className="font-poppins font-medium  text-primary text-left">
                    Return To
                  </p>
                  <p>Sun</p>
                </div>
                <input
                  type="text"
                  placeholder="25 Mar 2023"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div className="w-[418px] bg-white border border-green-200 rounded-[5px]   text-base  py-[15px] pl-4 pr-[10px]">
              <div className="flex justify-between  ">
                <p className="font-poppins font-medium  text-primary text-left">
                  Passengers & Cabin Class
                </p>

                <select className="">
                  <option selected>Economy Class</option>
                  <option value="bs">Buisness</option>
                  <option value="pt">Platinam</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="1 person"
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
