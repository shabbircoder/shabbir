import React, { useState } from "react";
import { projectData } from "./ProjectData";

function Project() {
  const [selectedTab, setSelectedTab] = useState("REACT");

  const handleTabChange = (tab) => {
    setSelectedTab(tab); 
  };

  const filteredData =
    selectedTab === "All"
      ? projectData
      : projectData.filter((item) => item.category === selectedTab);

  return (
    <div>
      <div className="w-full pl-4 md:mt-0 pb-8 bg-[#3d3d3d]">
        <span className="md:pl-14 pl-3 pb-3 tracking-wider text-white text-3xl font-bold">
          Projects
        </span>
      </div>

      <div className="flex flex-wrap justify-center pb-4 bg-[#3d3d3d] text-xl text-white space-x-2 md:space-x-4">
        {["All", "MAJOR", "HTML", "REACT"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`border rounded px-2 py-1 md:px-4 md:py-2 mb-2 md:mb-0 ${
              selectedTab === tab ? "bg-white text-black" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full bg-[#3d3d3d] pb-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap justify-center">
            {filteredData.map((item) => (
              <div key={item.id} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#3d3d3d] p-3 rounded-2xl shadow-lg cursor-pointer border-2 border-gray-600">
                  <img
                    className="rounded-lg w-full mb-2"
                    src={item.src}
                    alt={item.title}
                  />
                  <h2 className="text-xl text-white font-bold">{item.title}</h2>
                  <h2 className="text-lg text-white mb-2">
                    {item.description}
                  </h2>
                  {item.link && (
                    <button
                      onClick={() => window.open(item.link, "_blank")}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                      Visit Website
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
