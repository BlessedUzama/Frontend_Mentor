import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  BiHomeAlt,
  BiUser,
  BiFile,
  BiBriefcase,
  BiMessage,
  BiGridAlt,
  BiX,
  BiMoon,
  BiSun,
  BiServer,
} from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: "Home", href: "#home", icon: <BiHomeAlt className="text-xl" /> },
    { name: "About", href: "#about", icon: <BiUser className="text-xl" /> },
    { name: "Skills", href: "#skills", icon: <BiFile className="text-xl" /> },
    {
      name: "Services",
      href: "#services",
      icon: <BiServer className="text-xl" />,
    },
    {
      name: "Portfolio",
      href: "#portfolio",
      icon: <BiBriefcase className="text-xl" />,
    },
    {
      name: "Contact me",
      href: "#contact",
      icon: <BiMessage className="text-xl" />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 transition-colors duration-300 shadow-sm md:shadow-none">
      <nav className="max-w-[1024px] mx-auto px-4 sm:px-6 flex justify-between items-center h-[4.5rem]">
        {/* Left: Logo with the blue dot restored */}
        <a
          href="#home"
          className="text-lg font-medium text-gray-900 dark:text-white hover:text-gray-600 transition-colors"
        >
          Blessed<span className="text-blue-600">.</span>
        </a>

        {/* Right: Links & Toggles */}
        <div className="flex items-center gap-x-6">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle (Proper Line-art Icons) */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-800 dark:text-white hover:text-blue-600 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <BiSun /> : <BiMoon />}
          </button>

          {/* Mobile Menu App Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-600 transition-colors"
            >
              {isOpen ? <BiX /> : <BiGridAlt />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Grid Layout (Bottom Sheet Style) */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] dark:shadow-[0_-1px_4px_rgba(255,255,255,0.05)] rounded-t-[1.5rem] transition-transform duration-300 md:hidden z-40 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="px-6 pt-8 pb-12 grid grid-cols-3 gap-y-8 gap-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex flex-col items-center gap-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Close Button inside Mobile Menu */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 bottom-6 text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-600"
        >
          <BiX />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
