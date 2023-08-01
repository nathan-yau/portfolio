import { motion, AnimatePresence } from "framer-motion";
import styles from "./Skills.module.css";

export default function SkillsPage() {
    return (
            <>
            <motion.div
                key="skills-page-title"
                style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
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
            <div className={styles.gridOutlook}>
            <motion.div className={styles.boxOutlook}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: [0, 1.1, 1] }}
                  transition={{
                    delay: 1.90,
                    duration: 1,
                  }}>
                    Programming Language
                </motion.div>
                <motion.div className={styles.boxOutlook}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: [0, 1.1, 1] }}
                  transition={{
                    delay: 1.80,
                    duration: 1,
                  }}>
                    Framework
                </motion.div>
            </div>
            <div>
                <img src="/gear.svg" alt="gear" width={100} height={100} className={styles.gear}></img>
            </div>
            <div className={styles.gridOutlook}>
            <motion.div className={styles.boxOutlook}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: [0, 1.1, 1] }}
                  transition={{
                    delay: 1.85,
                    duration: 1,
                  }}>
                    Platform
                </motion.div>
                <motion.div className={styles.boxOutlook}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: [0, 1.1, 1] }}
                  transition={{
                    delay: 1.75,
                    duration: 1,
                  }}>
                    Database
                </motion.div>
            </div>
            </motion.div>
            </>
    )
}