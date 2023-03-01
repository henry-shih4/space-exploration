import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="px-8 h-32 absolute top-0 flex justify-between items-center w-[100%] z-[20] font-sub-font text-third-color lg:py-8 lg:top-10">
        <div className="px-4 flex flex-shrink-0">
          <img alt="logo" className="" src="/images/header/logo.svg" />
        </div>

        <div className="bg-gray-color h-[1px] w-[45%] translate-x-[3%] z-[50] justify-center items-center invisible lg:visible"></div>

        <div className=" h-24 grow justify-start items-center lg:backdrop-blur-3xl px-10 hidden md:flex ">
          <ul className="h-full flex justify-center items-center gap-x-12 text-[16px] tracking-[2.7px]">
            <li className="h-full flex justify-center items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-x-2 justify-center items-center h-full border-b-2"
                    : "flex gap-x-2 border-b-2 border-transparent"
                }
                to="/"
              >
                <div className="font-bold">00</div>
                <div>HOME</div>
              </NavLink>
            </li>
            <li className="h-full flex justify-center items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-x-2 justify-center items-center h-full border-b-2"
                    : "flex gap-x-2 border-b-2 border-transparent"
                }
                to="/destination"
              >
                <div className="font-bold">01</div>
                <div>DESTINATION</div>
              </NavLink>
            </li>
            <li className="h-full flex justify-center items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-x-2 justify-center items-center h-full border-b-2"
                    : "flex gap-x-2 border-b-2 border-transparent"
                }
                to="/crew"
              >
                <div className="font-bold">02</div>
                <div>CREW</div>
              </NavLink>
            </li>
            <li className="h-full flex justify-center items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-x-2 justify-center items-center h-full border-b-2"
                    : "flex gap-x-2 border-b-2 border-transparent"
                }
                to="/technology"
              >
                <div className="font-bold">03</div>
                <div>TECHNOLOGY</div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-shrink-0">
          <img className="md:hidden" src="/images/header/icon-hamburger.svg" />
        </div>
      </div>
    </>
  );
}
