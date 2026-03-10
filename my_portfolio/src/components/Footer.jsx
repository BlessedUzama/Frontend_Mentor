import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Blessed<span className="text-blue-600">.</span>
        </h1>

        <ul className="flex gap-6 mb-8 text-sm font-medium text-gray-800 dark:text-gray-200">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </a>
          </li>
        </ul>

        <div className="flex gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/blessed-uzama/"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors text-lg"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/BlessedUzama"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors text-lg"
          >
            <FiGithub />
          </a>
          <a
            href="https://x.com/SilentSage__"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors text-lg"
          >
            <FiTwitter />
          </a>
        </div>

        <span className="text-xs text-gray-500 dark:text-gray-400">
          &#169; Blessed Uzama. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
