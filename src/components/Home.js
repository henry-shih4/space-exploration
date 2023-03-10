import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex h-[100dvh] min-h-[100dvh] justify-center items-end bg-cover bg-center bg-fixed bg-no-repeat bg-home-mobile md:bg-home-tablet lg:bg-home-desktop">
        <div className="flex justify-center items-center flex-col h-[80%] lg:h-[50%] lg:w-[80%] lg:flex-row text-center">
          <div className="h-full w-[80%] flex justify-center items-center flex-col lg:justify-start lg:items-start">
            <div className="font-sub-font text-[16px] text-secondary-color leading-[34px] tracking-[4.725px] flex justify-center items-center w-full lg:justify-start md:text-[28px] ">
              SO YOU WANT TO TRAVEL TO
            </div>
            <div className="font-main-font text-[80px] leading-[100px] text-third-color flex justify-center items-center w-full lg:justify-start lg:text-[150px] md:leading-[172px]">
              SPACE
            </div>
            <div className="font-sub-font-2 text-[15px] leading-[25px] text-secondary-color w-[100%] flex justify-center items-center md:body-text lg:justify-start lg:w-[65%] lg:text-left">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </div>
          </div>
          <div className="h-full w-[50%] flex justify-center items-center">
            <div className="z-[10]">
              <NavLink
                className=" relative h-[150px] w-[150px] bg-white text-primary-color rounded-full flex justify-center items-center text-[20px] py-4 tracking-[1.25px] font-main-font md:h-[250px] md:w-[250px] md:text-[32px] md:tracking-[2px] cursor-pointer group"
                to="/destination"
              >
                EXPLORE
                <div className="absolute  z-[-1] w-[240px] h-[240px] rounded-full bg-transparent group-hover:bg-[#24262f] duration-300  lg:w-[360px] lg:h-[360px]"></div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
