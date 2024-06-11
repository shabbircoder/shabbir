import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#3d3d3d] border-t border-gray-500 shadow-orange-50 text-white py-6">
        <div className="container mx-auto flex justify-center items-center">
          {/* Social media icons */}
          <div className="flex space-x-8">
            <button
              onClick={() =>
                window.open("https://github.com/shabbircoder", "_blank")
              }
            >
              <FaGithub className="text-3xl" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shabbir-shabbir-85b402262",
                  "_blank"
                )
              }
            >
              <FaLinkedin className="text-3xl" />
            </button>
            <button
              onClick={() => window.open("https://bit.ly/3UO9P7s", "_blank")}
            >
              <FaWhatsapp className="text-3xl" />
            </button>
          </div>
        </div>
        <div className=" text-center pt-4 text-[18px] text-white">
          Created by Shabbir 2024
        </div>
      </footer>
    </>
  );
};

export default Footer;
