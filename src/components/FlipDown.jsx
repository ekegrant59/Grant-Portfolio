import { motion } from "framer-motion";
import { ReactNode } from "react";


const FlipDown = ({ styles, children, delay }) => {
  
  return (
    <motion.div
      className={styles}
      initial={{
        opacity: 0,
        scale: 1.2,
      }}
      whileInView={{
        opacity: 1,
        scale: [1.2, 1, 1.05, 1, 1.02, 1], // Zoom out then bounce effect
      }}
      transition={{
        delay: delay,
        duration: 1.5,
        ease: "easeOut",
        opacity: {
          delay: delay,
          duration: 0.8,
          ease: "easeOut",
        },
        scale: {
          delay: delay,
          duration: 1,
          times: [0, 0.4, 0.6, 0.8, 0.9, 1], // Control timing of each scale value
          ease: [0.25, 0.46, 0.45, 0.94],
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FlipDown;