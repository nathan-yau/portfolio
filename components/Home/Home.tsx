import { motion, AnimatePresence } from "framer-motion";
import styles from "./Home.module.css";

export default function DefaultPage() {
    return (
            <>
            <motion.div initial={{ opacity: 1, y: 0}}
                        animate={{ opacity: 0 , y: 200, display: "none"}}
                        transition={{
                            y: { duration: 0.2, delay: 2.5 },
                            opacity: { duration: 0.2, delay: 2.5 },
                            display: { delay: 2.7 }
                        }}>
                <motion.div
                    initial={{ x: 0, y: 200, opacity: 0}}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    className={styles.titleContainer}
                    exit={
                    { opacity: 0, y: "-100px",
                        transition: { ease: 'easeIn', duration: 0.5 } }
                    }
                    transition={{
                    x: { duration: 0.5 },
                    opacity: { duration: 1 },
                    y: { duration: 0.5 }
                    }}
                >
                <span className={styles.firstLine}>Hi, I'm Nathan.</span>
                </motion.div>
                <motion.div className={styles.titleLineContainer}>
                    <motion.span
                        initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1 , y: 0}}
                        className={styles.titleLine}
                        exit={
                        { opacity: 0, y: "-60px",
                            transition: { ease: 'easeIn', duration: 0.5 } }
                        }
                        transition={{
                            y: {delay: 0.5},
                            opacity: { duration: 0.5, delay: 0.5 }
                        }}>
                    Troubleshooting expert    
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1 , y: 0}}
                        className={styles.titleLine}
                        exit={
                        { opacity: 0, y: "-60px",
                            transition: { ease: 'easeIn', duration: 0.5 } }
                        }
                        transition={{
                            y: {delay: 1.0},
                            opacity: { duration: 0.5, delay: 1.0 }
                        }}>
                    /
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1 , y: 0}}
                        className={styles.titleLine}
                        exit={
                        { opacity: 0, y: "-60px",
                            transition: { ease: 'easeIn', duration: 0.5 } }
                        }
                        transition={{
                            y: {delay: 1.5},
                            opacity: { duration: 0.5, delay: 1.5 }
                        }}>
                    Developer  
                    </motion.span>
                </motion.div>
            </motion.div>
            {/* <motion.div className={styles.logoContainer}
            initial= {{ opacity: 0, y: 20}}
            animate={{ opacity: 1 , y: -30}}
            exit={{ opacity: 0, y: -100,
                transition: { ease: 'easeIn', duration: 0.5 } }}
            transition={{
                y: { duration: 0.5, delay: 2.8 },
                opacity: { duration: 0.5, delay: 2.8 }
            }}>
                <img src="/logo.png" className={styles.logo} alt="logo" width={250} />
            </motion.div> */}
            </>
    )
}