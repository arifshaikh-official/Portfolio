import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"

const Skills = () => {
  return (
    <div id="skills" className="relative px-4 sm:px-8 mt-5 lg:mt-6">

      <h1 className="flex justify-center text-center 
        text-6xl sm:text-6xl md:text-5xl 
        font-extrabold tracking-tight">
        S K I L L S
      </h1>

      <div className="flex  justify-center text-center 
        text-gray-500 max-w-80 mb-8 m-10
        mx-auto mt-2  text-sm sm:text-base">
        A look at the technologies I use to build the modern web.
      </div>

      <div className="flex flex-wrap lg:flex-nowrap -mt-5 justify-center gap-5  sm:gap-5 lg:gap-8">

        <div className="my-10 sm:my-20 flex items-center justify-center rounded-2xl border-2 border-zinc-600 p-5">
          <FaReact className="text-5xl sm:text-6xl text-cyan-400" />
        </div>

        <div className="my-10 sm:my-20 flex items-center justify-center rounded-2xl border-2 border-zinc-600 p-5">
          <RiNextjsLine className="text-5xl sm:text-6xl" />
        </div>

        <div className="my-10 sm:my-20 flex items-center justify-center rounded-2xl border-2 border-zinc-600 p-5">
          <RiTailwindCssFill className="text-5xl sm:text-6xl text-cyan-400" />
        </div>

        <div className="my-10 sm:my-20 flex items-center justify-center rounded-2xl border-2  border-zinc-600 p-5">
          <FaNodeJs className="text-5xl  sm:text-6xl text-green-500" />
        </div>

        <div className="my-10 sm:my-20 flex items-center justify-center rounded-2xl border-2 border-zinc-600 p-5">
          <SiMongodb className="text-5xl sm:text-6xl text-green-500" />
        </div>

      </div>
    </div>
  )
}

export default Skills
