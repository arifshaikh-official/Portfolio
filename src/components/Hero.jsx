import React from "react"
import bg from "../assets/mountains.png"
import star from "../assets/stars.png"
import { motion } from "framer-motion"


const starsWave = {
  animate: {
    y: [0, -10, 0, 10, 0],
    x: [0, 5, 0, -5, 0],
    transition: {
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
}


const mountainWave = {
  animate: {
    y: [0, -20, 0, 20, 0],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden">

     
      <div className="absolute inset-0 -z-10">

        <motion.div
          variants={starsWave}
          animate="animate"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${star})` }}
        />

        <motion.div
          variants={mountainWave}
          animate="animate"
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${bg})` }}
        />

      </div>

  
      <div className="text-white text-center max-w-2xl relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Building digital{" "}
          <span className="text-orange-400 font-semibold">
            experiences
          </span>{" "}
          that matter
        </h1>

        <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
          I craft beautiful, functional web applications with modern technologies
          and thoughtful user experiences.
        </p>

        <div className="mt-8">
          <button
            className="px-4 py-2 rounded-full bg-linear-to-r from-violet-400 to-violet-600
            text-white font-semibold shadow hover:scale-105 transition-transform duration-300"
          >
            View My Work →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
