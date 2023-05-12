import Link from "next/link";
import React from "react";
import GreenBgButton from "./button/GreenBgButton";
import BlueBgButton from "./button/BlueBgButton";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="bg-blue-100">
      <div className="flex justify-between md:gap-x-[117px] items-center py-4  max-w-6xl mx-2 md:mx-auto">
        <div className="flex items-center gap-x-[60px]">
          <img src="/assets/logo.png" />

          <ul className="hidden md:flex">
            <li className="font-medium text-xl font-poppins text-primary">
              {" "}
              <Link href="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-x-[30px]">
          <div className="  w-[433px]  border border-green-200  flex justify-between rounded-[5px] ">
            <input
              type="text"
              placeholder="Search Flight, Hotel, Visa"
              className="outline-none  pl-9 py-4 grow"
            />
            <img
              src="/assets/icons/search.png"
              className="px-[23px] bg-green-100"
            />
          </div>
          <div className="flex  gap-x-3">
            <GreenBgButton>Log In</GreenBgButton>
            <BlueBgButton>Sign Up</BlueBgButton>
          </div>
        </div>
        <RxHamburgerMenu size={20} className="md:hidden " />
      </div>
    </nav>
  );
};

export default Navbar;
