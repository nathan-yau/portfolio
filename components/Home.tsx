import { motion, AnimatePresence } from "framer-motion";
import styles from "./Home.module.css";

export default function DefaultPage() {
    return (
            <>
            <motion.div
                initial={{ x: "40%", y: 20, opacity: 0}}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={
                { opacity: 0, y: "-100px",
                    transition: { ease: 'easeIn', duration: 0.5 } }
                }
                transition={{
                x: { duration: 0.5, delay: 1.0 },
                opacity: { duration: 1 },
                y: { duration: 0.5, delay: 1.5 }
                }}
            >
            <span className={styles.firstLine}>Hi, I'm Nathan.</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={
                { opacity: 0, y: "-60px",
                    transition: { ease: 'easeIn', duration: 0.5 } }
                }
                transition={{
                opacity: { duration: 1, delay: 1.5 }
                }}
            >
            <span className={styles.titleLine}>Troubleshooting expert</span>
            </motion.div>
            </>
    )
}