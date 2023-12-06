"use client";

import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import ElevatedButton from "../ElevatedButton/ElevatedButton";
import Image from "next/image";

const Blog = ({ blogData }) => {
  const url = "https://sankalan.hashnode.dev/" + blogData.slug;

  return (
    <>
      <AnimatedCard>
        <motion.article
          className="cursor-pointer border border-[#fffa83] p-4 hover:underline rounded-[5px]"
          whileHover={{ scale: 0.98 }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="min-w-[200px]">
              <Image
                className="aspect-[1.77] rounded-[5px] w-full h-auto object-cover"
                height={400}
                width={400}
                src={blogData.coverImage.url}
                alt={blogData.slug}
              />
            </div>
            <br />
            <hr className="text-black bg-black opacity-60 border-[0px 0px 1px]" />
            <br />
            <div className="w-full">
              <p className="text-2xl font-bold">{blogData.title}</p>
              <p color={"gray.500"} className="text-sm font-bold">
                {blogData.brief.slice(0, -200)}
                {"..."}
              </p>
              <br />
              <ElevatedButton slug={blogData.slug}>Read More</ElevatedButton>
            </div>
          </a>
        </motion.article>
      </AnimatedCard>
    </>
  );
};

export default Blog;
