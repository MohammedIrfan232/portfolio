import { motion } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}        // start hidden + lower
      whileInView={{ opacity: 1, y: 0 }}     // animate into view
      viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;