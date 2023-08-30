import ProfileIcon from "../Experiences/ProfileIcon";
import ProfileName from "../Experiences/ProfileName";
import ProfileLabel from "../Experiences/ProfiloLabel";
import {AnimatePresence, motion} from "framer-motion";
import styles from "./MobileExperienceSection.module.css";
import { useState, useRef } from "react";
import AboutSection from "../Experiences/AboutSection";
import WorkExperienceSection from "./MobileWorkExperienceSection";
import EducationSection from "../Experiences/EducationSection";

export default function MobileWorkExperienceSection() {
    const [showPage, setShowPage] = useState(0)
    const showPageRef = useRef(0)
    const page = ["Profile", "About", "Work", "Education"]

    return (
        <motion.div className={styles.experienceContentDiv}>
            <AnimatePresence mode="wait">
                {showPage === 0 ?
                <motion.div 
                key="Profile"
                className={styles.experienceContentDiv}
                initial={{y: showPageRef.current!= showPage? 50: 0, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -50, opacity: 0}}>
                    <ProfileIcon></ProfileIcon>
                    <ProfileName></ProfileName>
                    <ProfileLabel delaySecond={3}></ProfileLabel>
                </motion.div>:
                showPage === 1 ?
                <motion.div
                key="About"
                className={styles.experienceContentDiv}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -50, opacity: 0}}>
                    <AboutSection></AboutSection>
                </motion.div>:
                showPage === 2 ?
                <motion.div
                key="Work"
                className={styles.experienceContentDiv}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -50, opacity: 0}}>
                    <WorkExperienceSection></WorkExperienceSection>
                </motion.div>:
                showPage === 3 ?
                <motion.div
                key="Education"
                className={styles.experienceContentDiv}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -50, opacity: 0}}>
                    <EducationSection></EducationSection>
                </motion.div>: null}
            </AnimatePresence>

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay: 3.5}}
            className={styles.buttonSection}>
                <div className={styles.buttonDiv}>
                {
                    page.map((item, index) => {
                        return (
                            <img key={item+index} src={showPage === index? "/dot-fill.svg": "dot.svg"} width={20} onClick={() => {if(showPage!=index) {showPageRef.current = showPage; setShowPage(index)}}}/>
                        )
                    })
                }
                </div>
                <motion.div 
                initial={{y: -5}}
                animate={{y: 0}}
                transition={{repeat: 10, duration: 0.1, repeatType: 'reverse', repeatDelay: 1.00}}
                className={styles.toolTips}>
                    ^ Click to view more ^
                </motion.div>
            </motion.div>
        </motion.div>
    )
}