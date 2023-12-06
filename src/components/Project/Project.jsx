"use client";
import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const Project = ({ name, url, desc, img, tags }) => {
  return (
    <>
      <AnimatedCard>
        <motion.article
          className="cursor-pointer rounded-2xl p-4 md:p-8 lg:p-12 bg-[#121831] hover:underline mb-[1rem] md:m-[2rem] lg:m-[3rem]"
          cursor={"pointer"}
          whileHover={{ scale: 0.98 }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image
              className="object-cover w-full rounded-2xl aspect-[1.9]"
              height={400}
              width={400}
              src={img}
              alt={name}
              priority
            />
          </a>
          <br />
          <a
            className="w-full"
            as="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="flex items-center text-xl font-bold md:text-2xl">
              {name}&nbsp; <FiArrowUpRight />
            </p>
            <div className="flex hover:no-underline">
              {tags.map((tag, index) => (
                <div
                  className="bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 text-xs md:text-base w-fit mr-1 hover:no-underline mt-1"
                  key={index}
                >
                  {tag}
                </div>
              ))}
            </div>
            <p
              className="text-xs font-bold md:text-lg text-[#A0AEC0] mt-2"
              fontSize={{ base: 12, md: 18 }}
              color={"gray.400"}
              fontWeight={700}
            >
              {desc}
            </p>
            <br />
          </a>
        </motion.article>
      </AnimatedCard>
    </>
  );
};

export default Project;
