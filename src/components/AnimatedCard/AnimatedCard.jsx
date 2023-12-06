import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.3, y: 200 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
      }}
    >
      {children}
    </motion.main>
  );
};

export default AnimatedCard;
