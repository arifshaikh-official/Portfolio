import React, { useState } from 'react';
import { projectDetails } from '../utils/data';
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const [cardStyles, setCardStyles] = useState({});

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setCardStyles((prev) => ({
      ...prev,
      [index]: {
        transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
      }
    }));
  };

  const handleMouseLeave = (index) => {
    setCardStyles((prev) => ({
      ...prev,
      [index]: {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      }
    }));
  };

  return (
    <div id="projects" className="min-h-screen max-w-5xl mx-auto px-6 lg:px-12">
      <h2 className="text-center text-5xl font-extrabold tracking-tight mb-10">
        P R O J E C T S
      </h2>

      <div className="flex text-center justify-center text-gray-500 max-w-80 mx-auto mb-10">
        <p>Here are some projects stuff to build the modern web</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={cardStyles[index]}
            className="rounded-xl bg-zinc-700 p-5 cursor-pointer shadow-md transition-transform duration-300 ease-out will-change-transform flex flex-col"
          >
            <img
              className="rounded-xl w-full h-48 object-cover"
              src={project.image}
              alt={project.projectName}
            />

            <h1 className="mt-4 text-center text-xl font-bold text-white flex items-center justify-center gap-2">
              {project.projectName}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
            </h1>

            <p className="mt-3 text-sm text-neutral-300 grow text-center">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-600 text-white shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
