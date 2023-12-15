"use client";
import React from "react";
import { motion } from "framer-motion";
import TweeterBtn from "../TweeterBtn/TweeterBtn";
import Navbar from "../Navbar/Navbar";
// import InteractiveMarquee from "@/components/Marquee/Marquee";
// import Heading from "./Heading/Heading";
// const Heading = React.lazy(() => import("./Heading/Heading"));
import dynamic from "next/dynamic";
import Image from "next/image";

const Heading = dynamic(() => import("./Heading/Heading"), {
  loading: () => (
    <div className="w-full animate-pulse">
      <div className="h-[6.75em] bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
    </div>
  ),
});

const InteractiveMarquee = dynamic(
  () => import("@/components/Marquee/Marquee"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full animate-pulse">
        <div className="h-[3.75em] bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
      </div>
    ),
  }
);

const Header = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
        }}
      >
        <div className="max-w-[700px] lg:max-w-[900px] gap-[50px] flex flex-col flex-nowrap items-center h-min overflow-visible mx-auto">
          <div className="flex flex-col items-center gap-[20px] justify-between w-full">
            <Image
              name="Sankalan Dasgupta"
              height={100}
              width={100}
              src="/icon.png"
              alt="Sankalan Dasgupta"
              className="rounded-full"
            />
            <TweeterBtn />
          </div>
          <Heading />
          <div className="w-[90vw] md:w-full">
            <InteractiveMarquee />
          </div>
          <Navbar />
        </div>
      </motion.div>
      <div className="md:max-w-[700px] lg:max-w-[1000px] p-0 mt-[50px] mx-auto">
        {children}
      </div>
    </>
  );
};

export default Header;
