"use client";
import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import Description from "./Description/Description";
import { FiArrowUpRight } from "react-icons/fi";

const data = {
  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "P360",
      start: "Jul, 2022",
      end: "",
      stack: ["React", "Angular", "Express", "Socket.io", "Redux"],
      description: [
        "Developed re-usable components. Reduced the complexity and redundancy of our codebase, and improved the maintainability of our system.",
        "Implemented Cookie based authentication to ensure application security. Using Nodejs and Azure frontdoor.",
        "Re-fractored the entire codebase and reduced bundle size by 50% to achieve higher performance",
        "Ensured frontend performance metrics and increased Lighthouse score upto 20%",
        "Developed and optimized apis in nodejs to authenticate and associate devices to the user into the application.",
      ],
      background: "#6A35FF",
      color: "#fff",
      link: "https://www.p360.com",
    },
    {
      id: 2,
      role: "Intern",
      company: "P360",
      start: "Feb, 2022",
      end: "Jul, 2022",
      stack: ["React", "Angular", "Express", "Socket.io", "Redux"],
      description: [
        "Developed re-usable components to increase scalability.",
        "Created and optimized Apis using Nodejs.",
        "Used Websockets to create api to gather live data of the devices to ensure 24/7 live monitoring.",
      ],
      background: "#ffa133",
      color: "#000",
      link: "https://www.p360.com",
    },
  ],
};

const Experience = () => {
  return (
    <div className="mx-auto">
      {data.experience.map((exp) => (
        <AnimatedCard key={exp.id}>
          <motion.div
            className="w-full bg-[#151417] p-[1.2em] mb-[1.2em] rounded-[18px] border-[#fffa83] border"
            whileHover={{ scale: 0.98 }}
          >
            <div className="grid grid-cols-5">
              <div className="col-span-3">
                <p className="font-bold text-[150%]">{exp.role}</p>
                <a
                  className="text-[1.43em] text-[#ffca80] underline flex items-center"
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company} <FiArrowUpRight />
                </a>
              </div>
              <div colSpan={2} className="col-span-2">
                <p className="float-right font-medium text-[1em]">
                  {exp.start} - {exp.end ? exp.end : "Present"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10">
              {exp.stack.map((stack) => (
                <p className="text-[1em] w-min" key={stack}>
                  {stack}
                </p>
              ))}
            </div>
            <br />

            {exp.description.map((desc) => (
              <Description key={desc} desc={desc} />
            ))}
          </motion.div>
        </AnimatedCard>
      ))}
    </div>
  );
};

export default Experience;
