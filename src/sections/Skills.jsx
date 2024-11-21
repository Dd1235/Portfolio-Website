import React from "react";
import { skillsData } from "../constants";

const Skills = () => {
  return (
    <section className="c-space my-20" id="skills">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-center text-gray-300 text-lg bg-gray-800 rounded-lg p-3 shadow-md hover:shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
