"use client";
import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import Description from "./Description/Description";
import { FiArrowUpRight } from "react-icons/fi";

const data = {
  experience: [
    {
      id: 1,
      role: "Senior Software Engineer (L1)",
      company: "P360",
      start: "Jul, 2022",
      end: "",
      stack: [
        "React Native",
        "React",
        "Terraform",
        "Socket.io",
        "Node.js",
        "Express",
        "Twilio",
        "Azure",
        "PostgreSQL",
      ],
      description: [
        "Architected and optimized the frontend of Zing (healthcare communication platform for Doctors and Pharma Sales Reps), focusing on Chat and Call features.",
        "Engineered an end-to-end automation system that reduced multi-tenant Zing deployment time from a day to just 5 minutes, creating a UI-driven workflow that generates configuration files, orchestrates Terraform pipelines, provisions Azure resources (key vault, storage, databases), configures Twilio services, and manages tenant-specific information across databases.",
        "Migrated the existing messaging system from Pusher to Socket.io and implemented zustand to persist and structurally manage data throughout the application. which streamlined data flow and minimized latency, resulting in a 10% improvement in communication efficiency.",
        "Enhanced frontend performance through advanced optimization techniques including code tree shaking, dynamic imports, bundle splitting, image compression with WebP conversion, CSS containment, request prioritization, and eliminating render-blocking resources, resulting in a 10% higher Lighthouse score and improved Core Web Vitals.",
        "Established Docker containerization for consistent development and production environments across the team",
        "Implemented comprehensive unit and integration testing with Jest and React Testing Library, achieving 85% code coverage.",
        "Created comprehensive technical documentation using Docusaurus used by 100+ developers, detailing the multi-tenant automation tool’s architecture decisions, maintenance procedures.",
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
