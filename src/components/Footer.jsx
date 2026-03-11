import React from 'react';
import logo from '../assets/logo.png';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-14 px-6">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <img className="w-[200px]" src={logo} alt="Logo" />
        <p className="text-gray-400 text-sm max-w-md">
          Building modern web experiences with clean design and efficient code.
        </p>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/arifshaikh-official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arifshaikh04/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
        <hr className="w-24 border-gray-700" />
        <p className="text-sm text-gray-500">
          © 2024 Arif. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
