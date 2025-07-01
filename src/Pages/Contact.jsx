import React from 'react'
'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section
        id="contact"
        className="relative isolate bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-black"
      >
        {/* Gradient Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.375rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[90rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-black dark:text-white">
            Contact <span className="text-[#00BFFF] dark:text-[#00BFFF]">Me!</span>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold dark:text-[#20E4CB]">
                Connect with me
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                If you want to know more about me or my work, or just say hello
                — send a message!
              </p>
              <br />
            </div>

            <form className="w-full max-w-4xl mx-auto space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      placeholder="Full Name"
      className="bg-transparent border border-blue-400 px-4 py-3 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="email"
      placeholder="Email Address"
      className="bg-transparent border border-blue-400 px-4 py-3 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="text"
      placeholder="Mobile Number"
      className="bg-transparent border border-blue-400 px-4 py-3 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Email Subject"
      className="bg-transparent border border-blue-400 px-4 py-3 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <textarea
    rows="6"
    placeholder="Your Message"
    className="w-full bg-transparent border border-blue-400 px-4 py-3 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  ></textarea>

  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-[#00BFFF] text-black font-semibold px-8 py-3 rounded-md hover:bg-blue-500 transition"
    >
      Submit
    </button>
  </div>
</form>

          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold dark:text-white">Email</h3>
              <p className="mt-2 font-semibold text-blue-700 uppercase break-all">
                hamzakhan15986464@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold dark:text-white">Address</h3>
              <p className="mt-2 font-semibold text-blue-700 uppercase">
                PESHAWAR, PAKISTAN
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold dark:text-white">Social</h3>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <a
                  href="https://github.com/HamzaSajjad01"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                    className="w-8 h-8"
                    alt="GitHub"
                    title="Github"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-sajjad1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    className="w-8 h-8"
                    alt="LinkedIn"
                    title="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

