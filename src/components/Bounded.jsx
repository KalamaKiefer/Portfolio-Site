import clsx from "clsx";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Bounded = ({ children, xPad, yPad, className }) => {
  const paddingX = "sm:px-16 px-6";
  const paddingY = "sm:py-16 py-6";
  const padding = "sm:px-16 px-6 sm:py-16 py-10";

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <section
        className={clsx(
          xPad === "default" && paddingX,
          yPad === "default" && paddingY,
          className
        )}
      >
        {children}
      </section>
    </motion.section>
  );
};

export default Bounded;
