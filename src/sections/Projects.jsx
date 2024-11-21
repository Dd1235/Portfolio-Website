import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { myProjects } from "../constants/index.js";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">My Projects</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left: Description Section */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="flex items-center gap-3">
            <p className="text-white text-2xl font-semibold">{currentProject.title}</p>
          </div>

          <p className="text-gray-400">{currentProject.desc}</p>
          <p className="text-gray-400">{currentProject.subdesc}</p>

          {/* Technologies Used */}
          <div className="my-5">
            <p className="text-gray-300 font-semibold">Languages & Tools:</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {currentProject.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-white bg-gray-800 rounded-lg px-3 py-1 text-sm shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          {currentProject.github && (
            <div className="mt-5">
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition duration-200 text-sm"
              >
                <FaGithub size={20} />
                <span>View GitHub Repository</span>
              </a>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Video Section */}
        <div className="border border-gray-300 bg-gray-800 rounded-lg h-96 md:h-full flex items-center justify-center overflow-hidden">
          <video
            src={currentProject.texture}
            autoPlay
            loop
            muted
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
