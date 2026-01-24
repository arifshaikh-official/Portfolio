import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute w-full flex justify-center py-4 mt-5 z-50">
      <nav className="relative w-[95%] md:w-[90%] border rounded-full flex items-center justify-between px-6 py-3 bg-violet-100  backdrop-blur-xl shadow-md">
        <div>
          <img src={logo} alt="Logo" className="w-28 h-auto" />
        </div>
        <button
          className="md:hidden text-gray-700 "
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose size={28} /> : <RxHamburgerMenu size={28} />}
        </button>

        {/* Menu */}
        <ul
          className={` 
            absolute md:static left-0 top-[110%] w-full md:w-auto
            bg-violet-100 md:bg-transparent
            rounded-2xl md:rounded-none
            md:flex md:space-x-10          font-medium text-gray-700
            transition-all duration-300 ease-in-out
            ${open
              ? "opacity-100 visible translate-y-0 "
              : "opacity-0 invisible -translate-y-4 md:opacity-100 md:visible md:translate-y-0 "}
          `}
        >

          <li className="text-center py-4 md:py-0" onClick={() => setOpen(false)}>
            <a href="#home" className="relative group inline-block ">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li className="text-center py-4 md:py-0" onClick={() => setOpen(false)}>
            <a href="#about" className="relative group inline-block">
              About Me
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li className="text-center py-4 md:py-0" onClick={() => setOpen(false)}>
            <a href="#skills" className="relative group inline-block">
              Skills
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li className="text-center py-4 md:py-0" onClick={() => setOpen(false)}>
            <a href="#projects" className="relative group inline-block">
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li className="text-center py-4 md:py-0" onClick={() => setOpen(false)}>
            <a href="#contact" className="relative group inline-block">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-linear-to-r from-violet-400 to-violet-600 text-white font-semibold shadow hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
