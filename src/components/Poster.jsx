import React from "react";
import { ReactTyped } from "react-typed";
import man from "../assets/man.png";
import shabbir from "../components/shabbir.pdf"

const Poster = () => {
  // flex flex-cols-2 justify-center
  return (
    <div className="w-full  bg-[#3d3d3d]">
      <div className="  mx-auto max-w-[1250px] md:h-[500px] h-[600px]  ">
        <div className="  mt- mx-auto grid md:grid-cols-3">
          <div className="md:col-span-2 md:mt-[60px] mx-[12px] md:mx-0">
            <p className="text-[#0fbcf9] font-bold mt-4  ml-4  ">
              <span className="mb-[20px] text-4xl tracking-[5px]  ">Hello</span>{" "}
              <br />
              <span className="mt-8 md:text-5xl text-3xl tracking-[7px] ">
                I'm Shabbir
              </span>
            </p>
            <ReactTyped
              className="md:text-5xl text-[#f7f1e3] text-3xl mt-8 ml-2 md:ml-0  font-bold md:pl-4 pl-2"
              strings={[
                "Frontend Devloper ",
                "Web Devloper",
                " React Js Devloper",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <br />
            <button
              onClick={() => window.open( shabbir , "_blank")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 ml-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Download CV
            </button>
          </div>
          <img
            className="w-[300px] mx-auto mt-[40px] md:mt-[7
          0px] rounded-full outline outline-offset-1 outline-blue-500 shadow-xl shadow-cyan-500  "
            src={man}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
