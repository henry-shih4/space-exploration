import React from "react";
import { useState, useEffect } from "react";

export default function Crew() {
  const [memberId, setMemberId] = useState(1);
  const [memberInfo, setMemberInfo] = useState();

  useEffect(() => {
    let singleMember = crew.filter((person) => {
      return person.id === memberId;
    });
    setMemberInfo(singleMember[0]);
  }, [memberId]);

  useEffect(() => {
    console.log(memberId);
    console.log(memberInfo);
  });

  const crew = [
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
  ];

  return (
    <div className="min-h-[100%] h-[100%] flex justify-center items-center bg-no-repeat bg-cover bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop lg:h-[100vh]">
      <div className="flex flex-col justify-center items-center gap-y-10 pb-6 w-[80%] lg:flex-row lg:h-[80%] lg:items-end">
        <div className="flex flex-col justify-center items-center w-[80%]">
          <div className="h-[140px] lg:hidden"></div>
          <div className="flex flex-col gap-y-6 w-[100%] lg:w-[60%]">
            <div className="flex justify-center items-center w-[100%] gap-x-5 mb-8 lg:justify-start">
              <div className="text-gray-color heading-2 font-bold leading-[34px]">
                02
              </div>
              <div className="text-third-color text-[20px] leading-[24px] tracking-[3.375px] font-sub-font lg:heading-2">
                MEET YOUR CREW
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div>{memberInfo ? memberInfo.role : null}</div>
              <div>{memberInfo ? memberInfo.name : null}</div>
              <div>{memberInfo ? memberInfo.bio : null}</div>
            </div>

            <div className="lg:w-[40%] flex flex-col justify-center items-center ">
              <div>
                <img src={memberInfo ? memberInfo.image : null} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
