import { motion } from "framer-motion";

const ElevatedButton = ({ slug, children }) => {
  const blogUrl = "https://sankalan.hashnode.dev/" + slug;
  return (
    <div className="relative w-full">
      <button className="absolute left-0 right-0 text-black border-2 border-black bg-slate-300 h-[2.5rem] rounded-[5px]">
        {children}
      </button>
      <motion.button
        className="border-2 border-black w-full bg-[#FAF089] text-black hover:bg-[#FAF089] h-[2.5rem] rounded-[5px] font-semibold ease-in-out z-50 relative"
        initial={{ y: -5, x: -5 }}
        whileHover={{ y: 0, x: 0 }}
        transition={{
          duration: 0.15,
          delay: 0.1,
        }}
        href={blogUrl}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </motion.button>
    </div>
  );
};

export default ElevatedButton;
