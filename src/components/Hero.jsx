import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <>
      <div className="max-w-screen 2xl container mx-auto px-4 md:px-20 my-15" id="Hero">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-14 md:mt-22 order-2 md:order-1 ">
            <span className="text-xl">Welcome to my feed</span>
            <div className="flex space-x-1 text-2xl md:w-4xl">
              <h1>Hello I'm a </h1>

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I’m a MERN stack developer passionate about building responsive,
              dynamic, and user-friendly web applications. Skilled in MongoDB,
              Express.js, React, and Node.js, I create clean, efficient, and
              scalable solutions that blend functionality with great design
            </p>
            <br />
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between">
              <div className="space-y-2">
                <h1 className="font-bold ">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">

                    <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                    <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://telegram.org/" target="_blank">
                    <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 ">
                <h1 className="font-bold ">Currently Working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-2xl hover:scale-105 duration-200 rounded-b-full border[2px]" />
                  <SiExpress className="text-xl md:text-2xl hover:scale-105 duration-200 rounded-b-full border[2px]" />
                  <FaReact className="text-xl md:text-2xl hover:scale-105 duration-200 rounded-b-full border[2px]" />
                  <FaNodeJs className="text-xl md:text-2xl hover:scale-105 duration-200 rounded-b-full border[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2">
            <img
              src="/photo.avif"
              alt="Photo"
              className="rounded-full mt-5 md:w-[400px] md:h-[400px]"
            />
          </div>
        </div>
      </div>

      
    </>
  );
};
