import { motion, AnimatePresence } from "framer-motion";
import styles from "./Experiences.module.css";

export default function ExperiencesPage() {
    return (
        <div style={{position: "relative"}}>
            <motion.div 
            className={styles.experiencesOuterPage}
            initial={{x:0}}
            animate={{x:350}}
            transition={
                {delay: 4.5, duration: 1}
            }>
                <motion.div 
                className={styles.experiencesInnerPage}
                initial={{y: 100, opacity:0}}
                animate={{y: -50, opacity:1}}
                transition={{
                    duration: 1.0
                }}>
                    <div style={{position: "relative", width: "250px", height: "250px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <div style={{position: "relative", width: "200px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
                        <div className={styles.profileImage}></div>
                            <motion.img src="/avatar.svg" alt="avatar" className={styles.avatar}/>
                        </div>
                        <motion.div 
                        initial={{scale: 1}}
                        animate={{scale: 0.9}}
                        transition={{delay: 6.0}}
                        className={styles.outerbound}></motion.div>
                    </div>
                    <div className={styles.BlinkinEffect}>
                        <motion.h1 className={styles.typingEffect}>Nathan Yau</motion.h1>
                    </div>
                    <motion.div                            
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{delay: 5.0}}
                            style={{color: "grey", fontSize: "15px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px"}}>
                        <span>Data Analyst</span>
                        <span>Operation Optimization Specialist</span>
                        <span>Project Coordinator</span>
                    </motion.div>
                    <motion.div className={styles.entryDiv}>
                        <motion.h5 className={styles.loadingText}></motion.h5>
                        <motion.div 
                            initial={{opacity:1}}
                            animate={{opacity:0, height: 0}}
                            transition={{
                                delay: 3.0
                            }}
                        className={styles.loadingSpinner}></motion.div>
                        <motion.div
                            initial={{opacity:1}}
                            animate={{opacity:0}}
                            transition={{delay: 4.5}}>
                            <motion.div
                                initial={{opacity:0, height: 0}}
                                animate={{opacity:1, height: '30px'}}
                                transition={{delay: 3.0}}
                                className={styles.readFile}>
                                    <h4>Read File</h4></motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className={styles.cursor}></motion.div>
                </motion.div>
            </motion.div>
            <motion.div
            initial={{opacity:0, x: 100}}
            animate={{opacity:1, x: 0}}
            transition={{
                delay: 5,
                duration: 1
            }}
            style={{display: "flex", gap: "10px", flexDirection: "column", position: "absolute", top: "-50px", height: '60vh', width: "50%"}}>
                <div className={styles.about}>About</div>
                <div className={styles.work}>Work Experience</div>
                <div className={styles.school}>Education</div>
            </motion.div>
        
        </div>

    )
}