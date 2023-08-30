import { motion, AnimatePresence } from "framer-motion";
import styles from "./MobilePage.module.css";
import Home from "./Home/Home";
import Dock from "./Dock/Dock";
import { useState, useEffect } from "react";
import MobileWorkExperienceSection from "./Mobile/MobileExperienceSection";
import MobileContactSecion from "./Mobile/MobileContactSection";
import MobileSkillsSection from "./Mobile/MobileSkillsSection";
import MobileProjectSection from "./Mobile/MobileProjectSection";

export default function MobilePage() {
    const [MobileWindow, setMobileWindow] = useState("Home")
    const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const id = setTimeout(() => {
            setMobileWindow("Experiences")
        }, 2500)
        setTimeout(() => setIsTransitioning(false), 4000)
        setTimeoutRef(id)
      }, [])

    return (
        <main className={styles.main}>
            <motion.div 
                className={styles.glassEffect}
                initial={{ opacity: 0, y: 200, height: 0}}
                animate={{ opacity: 1 , y: -90, height: "70vh"}}
                transition={{
                    duration: 0.5,
                    delay: 3.0,
                    height: {duration: 0.5, delay: 3.5}
                }}
            >
                <AnimatePresence mode="wait">
                    {MobileWindow === "Experiences"? <motion.div key="MobileExperience" className={styles.outerWindow} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -50}}><MobileWorkExperienceSection></MobileWorkExperienceSection></motion.div>:
                        MobileWindow === "Projects"? <motion.div key="MobileProjects" className={styles.outerWindow} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -50}}><MobileProjectSection></MobileProjectSection></motion.div>:
                        MobileWindow === "Skills"? <motion.div key="MobileSkills" className={styles.outerWindow} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -50}}><MobileSkillsSection></MobileSkillsSection></motion.div>:
                        MobileWindow === "Contact"? <motion.div key="MobileContact" className={`${styles.outerWindow} ${styles.outerContact}`} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -50}}><MobileContactSecion></MobileContactSecion></motion.div>: null}
                </AnimatePresence>
            </motion.div>
            <div className="homeContainer">
                <Home></Home>
            </div>
            <Dock setViewWindow={setMobileWindow} timeoutRef={timeoutRef} isTransitioning={isTransitioning} setIsTransitioning={setIsTransitioning}></Dock>
        </main>
    )
}