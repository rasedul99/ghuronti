import Banner from "@/components/Banner";
import CustomerSlider from "@/components/CustomerSlider";
import Hero from "@/components/Hero/Hero";
import International from "@/components/International/International";
import Mission from "@/components/Mission";
import Places from "@/components/Places/Places";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1105px] mx-auto">
      <Hero />
      <Places />
      <Banner />
      <International />
      <Mission />
      <div>
        <h2 className="font-poppins font-semibold text-[36px] text-primary text-center mb-6">
          Customer satisfaction is our top priority
        </h2>
        <p className="font-poppins font-medium text-base text-secondary text-center">
          Our clients praise us for our great results, personable service,
          expert knowledge. Here are what just a few of them had to say
        </p>
        <div className="mt-10 mb-[100px]">
          {" "}
          <CustomerSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
