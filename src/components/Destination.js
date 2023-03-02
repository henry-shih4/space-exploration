import React from "react";
import { useState, useEffect, useMemo } from "react";

export default function Destination() {
  const [destination, setDestination] = useState("Moon");
  const [destInfo, setDestInfo] = useState();



  const destinations = useMemo(
    () => [
      {
        name: "Moon",
        image: "/images/destination/image-moon.png",

        description:
          "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
      },
      {
        name: "Mars",
        image: "/images/destination/image-mars.png",
        description:
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
      },
      {
        name: "Europa",
        image: "/images/destination/image-europa.png",

        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
      },
      {
        name: "Titan",
        image: "/images/destination/image-titan.png",

        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
      },
    ],
    []
  );

  useEffect(() => {
    let destinationInfo = destinations.filter((item) => {
      return item.name === destination;
    });
    setDestInfo(destinationInfo);
  }, [destination, destinations]);

  return (
    <>
      <div className="min-h-[100dvh] h-[100%] flex justify-center items-center bg-destination-mobile bg-cover bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop lg:h-[100vh]">
        <div className="flex flex-col justify-center items-center gap-y-10 pb-6 w-[80%] lg:flex-row lg:h-[80%] lg:items-end">
          <div className="h-[120px] lg:hidden"></div>
          <div className="flex flex-col gap-y-6 w-[100%] lg:w-[60%]">
            <div className="flex justify-center items-center w-[100%] gap-x-5 mb-8 md:justify-start">
              <div className="text-gray-color heading-2 font-bold leading-[34px]">
                01
              </div>
              <div className="text-third-color text-[20px] leading-[24px] tracking-[3.375px] font-sub-font lg:heading-2">
                PICK YOUR DESTINATION
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <img
                alt={destInfo ? `${destInfo.name}` : "planet-name"}
                className="min-w-[300px] max-h-[300px] lg:min-w-[440px] lg:max-h-[440px]"
                src={destInfo ? destInfo[0].image : null}
              />
            </div>
          </div>
          <div className="lg:w-[40%] h-[75%] flex flex-col justify-evenly items-center  gap-y-10 ">
            <div className=" h-[2rem] flex justify-center items-center w-full text-white gap-x-8 lg:justify-start ">
              <div className="h-full flex flex-col justify-between group">
                <button
                  className="heading-3"
                  onClick={() => {
                    setDestination("Moon");
                  }}
                >
                  MOON
                </button>
                <div
                  className={
                    destination === "Moon"
                      ? "h-[2px] w-full bg-white"
                      : "h-[2px] w-full bg-transparent group-hover:bg-[#8a8b90] duration-300"
                  }
                ></div>
              </div>
              <div className="h-full flex flex-col justify-between group">
                <button
                  className="heading-3"
                  onClick={() => {
                    setDestination("Mars");
                  }}
                >
                  MARS
                </button>
                <div
                  className={
                    destination === "Mars"
                      ? "h-[2px] w-full bg-white"
                      : "h-[2px] w-full bg-transparent group-hover:bg-[#8a8b90] duration-300"
                  }
                ></div>
              </div>
              <div className="h-full flex flex-col justify-between group">
                <button
                  className="heading-3"
                  onClick={() => {
                    setDestination("Europa");
                  }}
                >
                  EUROPA
                </button>
                <div
                  className={
                    destination === "Europa"
                      ? "h-[2px] w-full bg-white"
                      : "h-[2px] w-full bg-transparent group-hover:bg-[#8a8b90] duration-300"
                  }
                ></div>
              </div>
              <div className="h-full flex flex-col justify-between group">
                <button
                  className="heading-3"
                  onClick={() => {
                    setDestination("Titan");
                  }}
                >
                  TITAN
                </button>
                <div
                  className={
                    destination === "Titan"
                      ? "h-[2px] w-full bg-white"
                      : "h-[2px] w-full bg-transparent group-hover:bg-[#8a8b90] duration-300"
                  }
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  mb-auto mt-auto lg:items-start">
              <div className=" flex justify-center items-center  uppercase font-main-font text-[88px] leading-[92px] lg:text-[100px] lg:leading-[115px] lg:justify-start text-white">
                <div>{destInfo ? destInfo[0].name : null}</div>
              </div>
              <div className="w-[100%] flex justify-center items-center text-center text-[16px] body-text lg:body-text">
                <div className="py-2 text-[16px] body-text lg:body-text lg:text-left">
                  {destInfo ? destInfo[0].description : null}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[100%] text-white">
              <div className="bg-gray-color h-[1px] w-full  justify-center items-center mb-8"></div>
              <div className="flex flex-col gap-y-8 justify-center items-center w-full lg:justify-start md:flex-row">
                <div className="w-[50%] flex flex-col justify-center items-center gap-y-2 lg:items-start">
                  <div className="text-[14px] tracking-[2.3625px] leading-[17px] font-sub-font">
                    AVG. DISTANCE
                  </div>
                  <div className="text-[28px] leading-[32px] font-main-font">
                    {destInfo ? destInfo[0].distance : null}
                  </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center items-center gap-y-2 lg:items-start">
                  <div className="text-[14px] tracking-[2.3625px] leading-[17px] font-sub-font">
                    EST. TRAVEL TIME
                  </div>
                  <div className="text-[28px] leading-[32px] font-main-font uppercase">
                    {destInfo ? destInfo[0].travel : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
