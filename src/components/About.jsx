import React from 'react';
import profilePic from '../assets/image.png';
import { easeInOut, motion } from "motion/react"

export default function About() {
  return (
    <section id="about" className=" min-h-screen mt-5 bg-neutral-900  text-white flex items-center px-6  lg:px-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div 
             initial={{ opacity: 1, x:40, scale: 0.5 }}
    animate={{ opacity: 5, delay:0.5, x:40, scale: 1 }}
    transition={{ ease: easeInOut, delay0: 0.6 }}
            
          className="space-y-8">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight">A B O U T</h2>
              <span className="absolute -top-4 right-0 hidden lg:block w-32 " />
            </div>
            <p className="text-xl font-semibold text-neutral-200">
              I’m passionate about innovation and driven by impact.
            </p>
            <div className="space-y-5 text-neutral-400 leading-relaxed">
              <p>
                I’m a third-year <span className="text-white font-medium">BCA student</span> with a strong focus on building modern, scalable, and user‑centric web applications.
              </p>

              <p>
                My core expertise lies in the <span className="text-white font-medium">MERN stack</span> (MongoDB, Express.js, React.js, Node.js), along with solid fundamentals in Data Structures and Algorithms that sharpen my problem‑solving abilities.
              </p>

              <p>
                I enjoy crafting clean, responsive interfaces using <span className="text-white font-medium">Tailwind CSS and React</span>, while building robust backend systems with <span className="text-white font-medium">Node.js, Express.js, and MongoDB</span>. I’m constantly learning and excited to take on new challenges that create real‑world impact.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div>
              <img
                src={profilePic}
                alt="Profile"
                className="w-[420px] h-[520px] object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
