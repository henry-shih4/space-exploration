import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [showSideNav, setShowSideNav] = useState(false);

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
                    : "flex gap-x-2 justify-center items-center h-full  border-b-2 border-transparent hover:border-b-2 hover:border-[#8a8b90] duration-300"
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
                    : "flex gap-x-2 justify-center items-center h-full  border-b-2 border-transparent hover:border-b-2 hover:border-[#8a8b90] duration-300"
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
                    : "flex gap-x-2 justify-center items-center h-full  border-b-2 border-transparent hover:border-b-2 hover:border-[#8a8b90] duration-300"
                }
                to="/technology"
              >
                <div className="font-bold">03</div>
                <div>TECHNOLOGY</div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className="flex flex-shrink-0"
          onClick={() => {
            setShowSideNav(true);
          }}
        >
          <img
            alt="hamburger-icon"
            className="cursor-pointer md:hidden"
            src="/images/header/icon-hamburger.svg"
          />
        </div>
      </div>

      {/*      sidebar nav      */}

      <div
        className={
          showSideNav
            ? "fixed min-h-[100%] w-[50%]  backdrop-blur-3xl right-0 flex justify-center items-start text-white z-[50] font-sub-font text-[16px] leading-[19px] tracking-[2.7px] translate-x-[0] duration-500"
            : "fixed min-h-[100%] w-[50%] bg-black backdrop-blur-3xl right-0 justify-center items-start text-white z-[50] font-sub-font text-[16px] leading-[19px] tracking-[2.7px] translate-x-[100%] duration-500 invisible"
        }
      >
        <ul className="h-full flex flex-col justify-center items-center text-[16px] tracking-[2.7px] gap-y-8 w-[50%] mt-[100px]">
          <li
            className="w-full cursor-pointer flex justify-end"
            onClick={() => {
              setShowSideNav(false);
            }}
          >
            <img alt="close-icon" src="/images/header/icon-close.svg" />
          </li>
          <li className="h-full flex justify-center items-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex gap-x-2 justify-center items-center h-full border-b-2"
                  : "flex gap-x-2 border-b-2 border-transparent"
              }
              to="/"
              onClick={() => {
                setShowSideNav(false);
              }}
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
              onClick={() => {
                setShowSideNav(false);
              }}
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
              onClick={() => {
                setShowSideNav(false);
              }}
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
              onClick={() => {
                setShowSideNav(false);
              }}
            >
              <div className="font-bold">03</div>
              <div>TECHNOLOGY</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
