import React from 'react';

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "As a Full-Stack Developer, I specialize in creating seamless web applications by integrating front-end and back-end technologies, ensuring robust performance and user-friendly interfaces.",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2679/2679754.png",
  },
  {
    title: "Front End Development",
    description:
      "As a Front-End Developer, I specialize in crafting intuitive and responsive user interfaces using technologies like HTML, CSS, JavaScript, and React. My focus is on delivering seamless user experiences and visually appealing designs.",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    title: "Back End Development",
    description:
      "As a Back-End Developer, I specialize in building robust server-side applications using technologies like Node.js and Express. My expertise includes creating efficient APIs, managing databases, and ensuring the security and scalability of web applications.",
    imgUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/backend-6568536-5440863.png?f=webp&w=256",
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-blue-200 py-10 dark:bg-black">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-black dark:text-white">
        My <span className="text-[#00BFFF] dark:text-[#00BFFF]">Services</span>
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
  {services.map((service, index) => (
    <div
      key={index}
      className="p-4 bg-white dark:bg-[#1E293B] border dark:border-gray-700 dark:text-white rounded-lg flex items-center flex-col"
    >
      <img
        src={service.imgUrl}
        alt={service.title}
        className="w-20 h-20 mx-auto mb-4"
      />
      <h3 className="text-xl font-bold mt-4 text-gray-700 dark:text-gray-400">
        {service.title}
      </h3>
      <p className="text-lg mt-2 text-justify dark:text-gray-400">
        {service.description}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Service;
