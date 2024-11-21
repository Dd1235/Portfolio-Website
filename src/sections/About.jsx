import React, { useState } from "react";
import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("avancha.dedeepya@iiitb.ac.in");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Photo Section */}
        <div className="flex justify-center items-center">
          <img
            src="assets/myself.jpeg" // Replace with your photo path
            alt="Dedeepya Avancha"
            className="w-[350px] h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* About Me Section */}
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl font-bold text-white">Hi, I’m Dedeepya Avancha</h2>
          <p className="text-gray-400 text-lg">
            I’m a second-year Computer Science student at IIIT Bangalore, passionate about learning and exploring new
            technologies. I enjoy working on projects related to data science, backend development, and physics and math related simulations.
          </p>
          <p className="text-gray-400 text-lg">
            With a strong academic record (CGPA: 3.83/4) and hands-on experience in financial data analysis and
            simulations, I strive to combine creativity with technical expertise to solve complex problems. I'm also interested in learning about the intersection of technology and finance.
          </p>
          <p className="text-gray-400 text-lg">
            Outside of coding, I like reading books.
          </p>
          {/* <div>
            <Button name="Contact Me" isBeam containerClass="w-full mt-5" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

