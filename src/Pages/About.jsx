import React from 'react';
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="h-auto flex items-start pt-10 pb-40 justify-center bg-green-200 text-gray-900 dark:bg-black"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-black dark:text-white">
          About <span className="text-[#00BFFF] dark:text-[#00BFFF]">Me</span>
        </h2>

        <div className="mx-12">
          <h2 className="mt-12 text-3xl font-semibold text-blue-500 dark:text-[#20E4CB]">
            About Me
          </h2>
          <p className="mt-4 text-xl text-justify text-gray-500">
            I'm a passionate MERN Stack Developer with hands-on experience in building dynamic,
            scalable, and responsive web applications using MongoDB, Express.js, React.js,
            and Node.js. I thrive in fast-paced environments and love turning complex
            problems into simple, elegant solutions.
          </p>
        </div>

        <div className="mx-12">
          <h2 className="mt-12 text-3xl font-semibold text-blue-500 dark:text-[#20E4CB]">
            Technologies and Tools
          </h2>
          <p className="mt-4 text-xl text-justify text-gray-500">
            Using the MERN stack and modern development tools, I build fast,
            scalable web applications optimized for seamless performance across all devices.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-2 justify-items-center mt-8">
          {/* HTML */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">HTML</h2>
          </motion.div>

          {/* CSS */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">CSS</h2>
          </motion.div>

          {/* Bootstrap */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">Bootstrap</h2>
          </motion.div>

          {/* Tailwind */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">Tailwind CSS</h2>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">JavaScript</h2>
          </motion.div>

          {/* React */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">React</h2>
          </motion.div>

          {/* Express */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">Express</h2>
          </motion.div>

          {/* NodeJs */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">NodeJs</h2>
          </motion.div>

          {/* MongoDB */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">MongoDB</h2>
          </motion.div>

          {/* Git */}
          <motion.div
            variants={fadeIn("up", 0.02)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">Git</h2>
          </motion.div>

          {/* Postman */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">Postman</h2>
          </motion.div>

          {/* Github */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-48 w-40"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
              className="w-12"
            />
            <h2 className="text-md ml-4">Github</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
