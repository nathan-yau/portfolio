import { motion, AnimatePresence } from "framer-motion";
import styles from "./Experiences.module.css";
import ProfileIcon from "../Experiences/ProfileIcon";
import ProfileName from "../Experiences/ProfileName";
import ProfileLabel from "../Experiences/ProfiloLabel";
import ReadFileButton from "../Experiences/ReadFileButton";
import LoadingSpinner from "../Experiences/LoadingSpinner";
import AboutSection from "../Experiences/AboutSection";
import WorkExperienceSection from "../Experiences/WorkExperienceSection";
import EducationSection from "../Experiences/EducationSection";
import { useState } from "react";

export default function ExperiencesPage({ windowWidth} : {windowWidth: number}) {
    const [showCompanyDetails, setshowCompanyDetails] = useState(-1)

    return (
        <div style={{position: "relative"}}>
            <motion.div className={styles.experiencesOuterPage} initial={{x:0}} animate={{x: windowWidth > 1100? 350: windowWidth < 850? 200: 210 + windowWidth/150}} transition={{delay: 4.5, duration: 1}}>
                <motion.div className={styles.experiencesInnerPage} initial={{y: 25, opacity:1}} animate={{y: -50, opacity:1}} transition={{duration: 1.0}}>
                    <ProfileIcon showCompanyDetail={showCompanyDetails}></ProfileIcon>
                    <ProfileName showCompanyDetail={showCompanyDetails}></ProfileName>
                    <ProfileLabel delaySecond={5} showCompanyDetail={showCompanyDetails}></ProfileLabel>
                    <motion.div
                    animate={{height: "0%"}}
                    transition={{delay: 5.0, duration: 0.5}}
                    className={styles.entryDiv}>
                        <LoadingSpinner></LoadingSpinner>
                        <ReadFileButton></ReadFileButton>
                    </motion.div>
                    <motion.div className={styles.cursor}></motion.div>
                </motion.div>
            </motion.div>
            <motion.div className={styles.detailSections}initial={{opacity:0, x: 100}} animate={{opacity:1, x: windowWidth > 1100? -0: -90}} transition={{ delay: 5, duration: 1 }}>
                <AboutSection setShowCompany={setshowCompanyDetails}></AboutSection>
                <WorkExperienceSection setShowCompany={setshowCompanyDetails}></WorkExperienceSection>
                <EducationSection></EducationSection>
            </motion.div>
        </div>

    )
}