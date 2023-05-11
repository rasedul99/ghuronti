import React from "react";

const Header = () => {
  return (
    <header className="pt-[17px] pb-5 bg-green-100 flex justify-center items-center gap-x-[27px] font-poppins text-primary">
      <div className="flex gap-x-[6px] items-center ">
        <img src="/assets/icons/social/telephone.png" />

        <p className="text-lg font-semibold">+88-01885-XXX-XXX </p>
      </div>
      <p className="font-medium text-xl">Contract Us</p>
    </header>
  );
};

export default Header;
