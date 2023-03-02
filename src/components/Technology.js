import React from "react";
import { useState, useEffect, useMemo } from "react";

export default function Technology() {
  const [technologyId, setTechnoloyId] = useState(1);
  const [techInfo, setTechInfo] = useState();

  const technologies = useMemo(
    () => [
      {
        name: "Launch vehicle",
        id: 1,
        images: {
          portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
          landscape: "/images/technology/image-launch-vehicle-landscape.jpg",
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        name: "Spaceport",
        id: 2,
        images: {
          portrait: "/images/technology/image-spaceport-portrait.jpg",
          landscape: "/images/technology/image-spaceport-landscape.jpg",
        },
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      },
      {
        name: "Space capsule",
        id: 3,
        images: {
          portrait: "/images/technology/image-space-capsule-portrait.jpg",
          landscape: "/images/technology/image-space-capsule-landscape.jpg",
        },
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ],
    []
  );

  useEffect(() => {
    let selectedTech = technologies.filter((item) => {
      return item.id === technologyId;
    });
    setTechInfo(selectedTech[0]);
  }, [technologyId, technologies]);

  return (
    <>
      <div className="min-h-[100dvh] h-[100%] flex justify-center items-center bg-no-repeat bg-cover bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop lg:h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-y-10  w-[80%] lg:h-[100%] lg:justify-end lg:flex-row lg:items-end ">
          <div className="h-[120px] lg:hidden"></div>
          <div className="flex flex-col justify-center items-center w-[100%] lg:h-[75%] lg:w-[45%]  ">
            <div className="h-full  flex flex-col justify-evenly items-center ">
              <div className="flex justify-start items-center w-[80%] gap-x-5 mb-8 ">
                <div className="text-gray-color heading-2 font-bold leading-[34px]">
                  03
                </div>
                <div className="text-third-color text-[20px] leading-[24px] tracking-[3.375px] font-sub-font lg:heading-2 lg:text-[28px] lg:leading-[34px]">
                  SPACE LAUNCH 101
                </div>
              </div>
              <div className=" w-[100%] min-w-[350px] lg:w-[100%] mt-auto mb-auto ">
                <img
                  alt={
                    techInfo
                      ? `{$techInfo.name}-landscape`
                      : "technology-landscape"
                  }
                  className="w-full lg:hidden"
                  src={techInfo ? techInfo.images.landscape : null}
                />
                <img
                  alt={
                    techInfo
                      ? `{$techInfo.name}-portrait`
                      : "technology-portrait"
                  }
                  className="w-full hidden lg:block"
                  src={techInfo ? techInfo.images.portrait : null}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] h-[75%] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center  h-[full] lg:flex-row-reverse">
              <div className="flex justify-center items-center gap-x-6 my-6 text-[24px] leading-[28px] tracking-[1.5px] font-main-font text-center lg:flex-col lg:gap-y-6">
                <div
                  className={
                    technologyId === 1
                      ? "h-[60px] w-[60px] bg-white rounded-full text-black flex justify-center items-center  cursor-pointer duration-300"
                      : "h-[60px] w-[60px] bg-transparent rounded-full text-white border-2 border-gray-color flex justify-center items-center  cursor-pointer hover:border-white duration-150"
                  }
                  onClick={() => {
                    setTechnoloyId(1);
                  }}
                >
                  1
                </div>
                <div
                  className={
                    technologyId === 2
                      ? "h-[60px] w-[60px] bg-white rounded-full text-black flex justify-center items-center  cursor-pointer duration-300"
                      : "h-[60px] w-[60px] bg-transparent rounded-full text-white border-2 border-gray-color flex justify-center items-center  cursor-pointer hover:border-white duration-150"
                  }
                  onClick={() => {
                    setTechnoloyId(2);
                  }}
                >
                  2
                </div>
                <div
                  className={
                    technologyId === 3
                      ? "h-[60px] w-[60px] bg-white rounded-full text-black flex justify-center items-center  cursor-pointer duration-300"
                      : "h-[60px] w-[60px] bg-transparent rounded-full text-white border-2 border-gray-color flex justify-center items-center  cursor-pointer hover:border-white duration-150"
                  }
                  onClick={() => {
                    setTechnoloyId(3);
                  }}
                >
                  3
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-6 pb-10">
                <div className="heading-3 text-secondary-color">
                  THE TERMINOLOGY...
                </div>
                <div className="font-main-font text-[40px] leading-[46px] uppercase text-third-color text-center">
                  {techInfo ? techInfo.name : null}
                </div>
                <div className="font-sub-font-2 text-[16px] leading-[28px] text-secondary-color w-[70%] text-center pb-4">
                  {techInfo ? techInfo.description : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
