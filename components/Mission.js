import React from "react";

const Mission = () => {
  return (
    <div className="my-[100px]">
      <div>
        <h2 className="font-poppins font-semibold text-[36px] text-primary text-center">
          Our Mission & Vision
        </h2>
        <p className="font-poppins font-medium text-base text-secondary text-center">
          Serving our customer, searching their entire satisfaction and
          providing touristic services of quality, committing to the social,
          cultural and environmental reality of our country.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-x-[80px] gap-y-5 mt-[68px]">
          <img src="/assets/mission.png" />
          <img src="/assets/vission.png" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
