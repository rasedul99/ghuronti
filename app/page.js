import Banner from "@/components/Banner";
import Hero from "@/components/Hero/Hero";
import International from "@/components/International/International";
import Places from "@/components/Places/Places";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1105px] mx-auto">
      <Hero />
      <Places />
      <Banner />
      <International />
    </div>
  );
};

export default Home;
