import { BiAward, BiBriefcaseAlt, BiSupport, BiDownload } from "react-icons/bi";

import profileImage from "../assets/ChatGPT Image Feb 21, 2026, 07_42_46 AM.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            About Me
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            My introduction
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            {/* Adding a subtle rounded-2xl border and shadow for a clean look */}
            <img
              src={profileImage}
              alt="Blessed - Web Developer"
              className="w-[250px] md:w-[350px] rounded-2xl shadow-lg dark:shadow-none dark:border dark:border-gray-800 object-cover"
            />
          </div>

          {/* Right Side: Info & Description */}
          <div>
            {/* The 3 Info Boxes */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center shadow-sm transition-colors duration-300">
                <BiAward className="text-2xl text-gray-800 dark:text-gray-200 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                  Experience
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  1+ Years
                </span>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center shadow-sm transition-colors duration-300">
                <BiBriefcaseAlt className="text-2xl text-gray-800 dark:text-gray-200 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                  Completed
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  10+ Projects
                </span>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center shadow-sm transition-colors duration-300">
                <BiSupport className="text-2xl text-gray-800 dark:text-gray-200 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                  Support
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Online 24/7
                </span>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I am a dedicated frontend developer with a passion for building
              beautiful, responsive, and user-friendly web applications. I
              specialize in React and modern CSS frameworks, constantly learning
              new technologies to improve my craft and deliver high-quality
              digital experiences.
            </p>

            {/* Download CV Button */}
            
            <a
              href="/cv.pdf"
              download="Blessed_CV.pdf"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 px-8 rounded-2xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Download CV
              <BiDownload className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
