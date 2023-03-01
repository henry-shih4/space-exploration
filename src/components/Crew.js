import React from "react";
import { useState, useEffect, useMemo } from "react";

export default function Crew() {
  const [memberId, setMemberId] = useState(1);
  const [memberInfo, setMemberInfo] = useState();
  const crew = useMemo(
    () => [
      {
        name: "Douglas Hurley",
        id: 1,
        image: "/images/crew/image-douglas-hurley.png",
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      {
        name: "Mark Shuttleworth",
        id: 2,
        image: "/images/crew/image-mark-shuttleworth.png",

        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
      {
        name: "Victor Glover",
        id: 3,
        image: "/images/crew/image-victor-glover.png",
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      },
      {
        name: "Anousheh Ansari",
        id: 4,
        image: "/images/crew/image-anousheh-ansari.png",
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    ],
    []
  );

  useEffect(() => {
    let singleMember = crew.filter((person) => {
      return person.id === memberId;
    });
    setMemberInfo(singleMember[0]);
  }, [memberId, crew]);

  return (
    <div className="min-h-[100dvh] h-[100%] flex justify-center items-center bg-no-repeat bg-cover bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop lg:h-[100vh]">
      <div className="flex flex-col justify-center items-center gap-y-10  w-[80%] lg:h-[100%]  lg:justify-end">
        <div className="h-[120px] lg:hidden"></div>
        <div className="flex flex-col justify-center items-center w-[100%]  lg:h-[100%]">
          <div className="flex flex-col  justify-center items-center gap-y-6 w-[100%] lg:flex-row lg:h-full lg:items-end ">
            <div className="flex flex-col justify-center items-center gap-y-6 lg:w-[50%]  lg:gap-y-0  lg:h-[75%] lg:justify-start">
              <div className="h-full  flex flex-col justify-evenly items-center ">
                <div className="flex justify-start items-center  w-[100%] gap-x-5 mb-8">
                  <div className="text-gray-color heading-2 font-bold leading-[34px]">
                    02
                  </div>
                  <div className="text-third-color text-[20px] leading-[24px] tracking-[3.375px] font-sub-font lg:heading-2 lg:text-[28px] lg:leading-[34px]">
                    MEET YOUR CREW
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[80%] gap-y-4 lg:justify-start lg:w-[100%] mt-auto">
                  <div className="font-main-font text-[24px] leading-[28px] uppercase text-[#8E8F93] text-center  w-full lg:text-left lg:text-[32px] lg:leading-[37px] ">
                    {memberInfo ? memberInfo.role : null}
                  </div>
                  <div className="font-main-font text-[40px] leading-[46px] uppercase text-third-color flex justify-center items-center text-center w-full lg:justify-start lg:text-[56px] lg:leading-[64px] lg:text-left">
                    {memberInfo ? memberInfo.name : null}
                  </div>
                  <div className="font-sub-font-2 text-[16px] leading-[28px] text-secondary-color text-center w-full lg:text-left lg:text-[18px] lg:leading-[32px] ">
                    <div className="lg:w-[80%]">
                      {memberInfo ? memberInfo.bio : null}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center py-4 gap-x-6 lg:justify-start w-full mt-auto mb-auto">
                  <button
                    className={
                      memberId === 1
                        ? "h-[15px] w-[15px] bg-third-color rounded-full cursor-pointer"
                        : "h-[15px] w-[15px] bg-[#42444b] rounded-full cursor-pointer"
                    }
                    onClick={() => setMemberId(1)}
                  ></button>
                  <button
                    className={
                      memberId === 2
                        ? "h-[15px] w-[15px] bg-third-color rounded-full cursor-pointer"
                        : "h-[15px] w-[15px] bg-[#42444b] rounded-full cursor-pointer"
                    }
                    onClick={() => setMemberId(2)}
                  ></button>
                  <button
                    className={
                      memberId === 3
                        ? "h-[15px] w-[15px] bg-third-color rounded-full cursor-pointer"
                        : "h-[15px] w-[15px] bg-[#42444b] rounded-full cursor-pointer"
                    }
                    onClick={() => setMemberId(3)}
                  ></button>
                  <button
                    className={
                      memberId === 4
                        ? "h-[15px] w-[15px] bg-third-color rounded-full cursor-pointer"
                        : "h-[15px] w-[15px] bg-[#42444b] rounded-full cursor-pointer"
                    }
                    onClick={() => setMemberId(4)}
                  ></button>
                </div>
              </div>
            </div>

            <div className="min-w-[50%] flex flex-col justify-end items-center pt-4">
              <div>
                <img
                  alt={memberInfo ? `${memberInfo.name}` : "crew-member"}
                  src={memberInfo ? memberInfo.image : null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
