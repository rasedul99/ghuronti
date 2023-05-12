import React from "react";

const Footer = () => {
  return (
    <div className="px-[125px] w-full  py-[66px]  bg-[#26ADE2] ">
      <div className="grid grid-cols-1 md:gap-x-[90px] md:grid-cols-3 lg:grid-cols-4 gap-y-2 text-white">
        <div className="">
          <h3 className="mb-[24px] font-poppins font-medium text-xl ">
            BD Office Address
          </h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex items-center gap-x-3">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>+8801XXXXXXXX </p>
            </li>
            <li className="flex items-center gap-x-[15px]">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>+8801XXXXXXXX</p>
            </li>
            <li className="flex items-center gap-x-[15px]">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>Dhaka Tower, L XX, XX Topkhana Rd, Purana Paltan, Dhaka XX</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="mb-[24px] font-poppins font-medium text-xl ">
            USA Office Address
          </h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex items-center gap-x-3">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>+1 470 XXXXXX(USA)</p>
            </li>
            <li className="flex items-center gap-x-[15px]">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>+1 470 XXXXXX(USA)</p>
            </li>
            <li className="flex items-center gap-x-[15px]">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>USA Address: XXX Arbor Creek Ln, Doraville, GA XXXX</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="mb-[24px] font-poppins font-medium text-xl ">
            Social Media
          </h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex items-center gap-x-3">
              <img src="/assets/icons/social/call.png" alt="telephon" />
              <img src="/assets/icons/social/call.png" alt="telephon" />
              <img src="/assets/icons/social/call.png" alt="telephon" />
              <img src="/assets/icons/social/call.png" alt="telephon" />
              <img src="/assets/icons/social/call.png" alt="telephon" />
            </li>
            <li className="flex items-center gap-x-[15px]">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>XYZ@gmail.com</p>
            </li>
            <li className="flex items-center gap-x-[15px]">
              <img src="/assets/icons/call.png" alt="telephon" />
              <p>www.XYZ.com</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="mb-[24px] font-poppins font-medium text-xl ">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Terms & Condition </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
