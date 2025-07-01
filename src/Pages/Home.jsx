import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// import img1 from 'D:/web/React js/reactjs/Protfolio/public/img1.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../variants";
import { motion } from 'framer-motion';



function Home() {
  return (
     <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-blue-200 dark:bg-black px-4 sm:px-6 lg:px-20 py-40 lg:py-14"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-[#20E4CB]">
          Hi, I'm
          <span className="text-[#00BFFF]"> Hamza </span>
          <span className="block mt-2 text-black dark:text-[#20E4CB]">
            <TypeAnimation
              sequence={[
                "Front End Developer",
                1000,
                "Back End Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
            />
          </span>
        </h1>
    
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-800 dark:text-[#7ac6dd] max-w-xl mx-auto md:mx-0">
          I am a Front-End / Back-End / Full-Stack Developer.
          <br />
          Currently working as a MERN Stack Developer.
        </p>
    
        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-8 dark:text-[#20E4CB]">
          <a
            href="https://github.com/HamzaSajjad01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sajjad1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={36} />
          </a>
        </div>
      </div>
    
      {/* Right Image (Hidden on mobile) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <motion.img
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          src="/img1.png"
          alt="Hero"
          className="w-[300px] sm:w-[400px] md:w-[500px] hidden md:block mt-10"
        />
      </div>
    </section>
    
  )
}

export default Home