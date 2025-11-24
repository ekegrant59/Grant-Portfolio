import { ReactNode } from 'react'
import { motion } from 'framer-motion';


const FadeUp = ({styles, children, delay=0}) => {
  return (
    <motion.div className={styles}
        initial={{ opacity: 0, y: 50, scale: 1.1 }} // start slightly zoomed in
        whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
        }}
        transition={{
            delay: delay,
            opacity: {delay: delay, duration: 0.4, ease: "easeIn" },
            y: {delay: delay, duration: 0.4, ease: "easeIn" },
            scale: { delay: delay + 0.4, duration: 0.3, ease: "easeIn" }, // zoom happens after fade-in completes
        }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
  )
}

export default FadeUp