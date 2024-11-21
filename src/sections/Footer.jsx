import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Social Media Links */}
      <div className="flex gap-5">
        <a
          href="https://github.com/Dd1235"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-200"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-200"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* CV and Email */}
      <div className="flex gap-5">
        {/* Email */}
        <a
          href="mailto:avancha.dedeepya@iiitb.ac.in"
          className="text-white hover:text-gray-400 transition duration-200 flex items-center gap-2"
        >
          <FaEnvelope size={24} />
          <span>Email Me</span>
        </a>

        {/* CV */}
        <a
          href="/assets/Resume.pdf" // Update this path to your CV PDF
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-200 flex items-center gap-2"
        >
          <FaFilePdf size={24} />
          <span>Download Resume</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
