// Skill.js
import React from "react";
import data from "./SkillData";

export default function Skill() {
  return (
    <div>
      <div className="w-full pl-4 md:mt-0 pb-4 bg-[#3d3d3d]">
        <span className="md:pl-14 pl-3 pb-3 tracking-wider text-white text-3xl font-bold">
          Skills
        </span>
      </div>
      <div className="w-full bg-[#3d3d3d]">
        <div className="max-w-[1240px] mx-auto p-4">
          <div className="grid grid-cols-4 gap-3 md:grid-cols-11 pb-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center w-[70px] md:w-[90px] 2xl:w-[90px] h-[80px] md:h-[100px] 2xl:h-[110px] rounded-full bg-white border shadow-md shadow-blue-500"
                style={{ width: item.width, height: item.height }}
              >
                <img
                  src={item.src}
                  className="w-[70px] cursor-pointer"
                  alt=""
                  style={{ width: item.imgWidth }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
