import React from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from './Logo'

const Header = ({ activeSection }) => {
  return (
    <header className="fixed top-0 w-full bg-blue-200 shadow-lg dark:bg-gray-900 dark:text-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Logo */}
          <Logo/>
        {/* Right: Navbar + ThemeToggle */}
        <div className="flex items-center space-x-6">
          <nav className="hidden space-x-4 md:flex">
            <a
              href="#home"
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === "home"
                  ? "bg-[#00BFFF] text-black"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === "about"
                  ? "bg-[#00BFFF] text-black"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              About Me
            </a>
            <a
              href="#services"
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === "services"
                  ? "bg-[#00BFFF] text-black"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Services
            </a>
            <a
              href="#projects"
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === "projects"
                  ? "bg-[#00BFFF] text-black"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === "contact"
                  ? "bg-[#00BFFF] text-black"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
