import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ resumeLink }) => {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "ABOUT US", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "RESUME", link: resumeLink }, // Use the resume link here
    { name: "CONTACT US", link: "contact" },
  ];

  return (
    <div className="shadow-md shadow-gray-400 sticky top-0 left-0">
      <div className="md:flex items-center justify-between -mb-1 bg-[#222f3e] py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#c8d6e5]">
          <span className="text-3xl text-[#f7f1e3] md:ml-8 pt-2">Shabbir</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute text-white right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <IoClose onClick={() => setOpen(!open)} />
          ) : (
            <FiMenu onClick={() => setOpen(!open)} />
          )}
        </div>

        <ul
          className={`h-screen z-1 md:h-auto md:flex md:items-center md:pb-0 pb-2 bg-[#222f3e] absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 text-xl cursor-pointer md:my-0 my-10"
            >
              {link.name === "RESUME" ? (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded text-[#c8d6e5] hover:bg-white hover:text-black duration-500"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <ScrollLink
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="py-2 px-3 rounded text-[#c8d6e5] hover:bg-white hover:text-black duration-500"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
