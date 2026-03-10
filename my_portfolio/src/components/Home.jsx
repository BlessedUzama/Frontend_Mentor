import { BiMouse, BiChevronsDown, BiSend } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/ChatGPT Image Feb 20, 2026, 10_15_03 PM.png";

const Home = () => {
  return (
    <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Socials + Text + Image */}
        <div className="grid grid-cols-1 md:grid-cols-[100px_minmax(0,1fr)_minmax(0,1fr)] gap-8 items-center">
          {/* 1. Vertical Social Icons */}
          <div className="hidden md:flex flex-col gap-6 text-gray-800 dark:text-gray-200">
           
            <a
              href="https://www.linkedin.com/in/blessed-uzama/"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-blue-600 transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/BlessedUzama"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-blue-600 transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-blue-600 transition-colors"
            >
              <FiTwitter />
            </a>
          </div>

          {/* 2. Text Intro */}
          <div className="order-2 md:order-none">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Hi, I'm Blessed
            </h1>

            {/* The Typing Effect */}
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 flex items-center gap-2">
              <span className="text-gray-800 dark:text-gray-200">and</span>
              <span className="text-gray-800 dark:text-gray-200">
                <Typewriter
                  words={[
                    "I'm a student",
                    "I'm a frontend developer",
                    "I'm a product designer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 px-6 rounded-2xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Contact Me
              <BiSend className="text-xl" />
            </a>
          </div>

          {/* 3. The "Blob" Profile Image */}
          <div className="order-1 md:order-none flex justify-center md:justify-end">
            <div
              className="profile-blob w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-gray-200 dark:bg-gray-800 bg-cover bg-center shadow-[inset_0_0_0_8px_rgba(255,255,255,0.3)]"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden md:flex mt-24">
          <a
            href="#about"
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors"
          >
            <BiMouse className="text-2xl" />
            <span className="font-medium text-sm">Scroll down</span>
            <BiChevronsDown className="text-xl animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
