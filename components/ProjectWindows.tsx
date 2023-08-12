import { motion } from "framer-motion";
import styles from "./ProjectWindows.module.css";
import { useState, useEffect } from "react";

export default function ProjectWindows({focused, setfocused, reset, projectCode, windowsPosition, projectDetails, windowWidth}: { focused: string, setfocused: Function, reset: boolean, projectCode: string, windowsPosition:string, projectDetails: any, windowWidth: number}) {
    const [peekPosition, setpeekPosition] = useState(windowsPosition)

    function peekWindows() {
        setpeekPosition(Number(windowsPosition.replace("px",""))-25+"px")
    }

    function donePeekingWindows() {
        setpeekPosition(windowsPosition)
    }

    const isSmallScreen = windowWidth < 1000;
    const xValue = isSmallScreen ? "-50%" : projectDetails.startXIndex;

    return (
    <motion.div 
    drag
    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)"}}
    initial={{opacity:0}}
    animate={{opacity:1, x: xValue, y: projectDetails.startYIndex, border: reset ? "none" : "1px solid transaparent"}}
    transition={{
        opacity: {duration: 0.75},
        x : {duration: 0.5, ease: "easeInOut"}
    }}
    className={styles.windows} 
    onClick={()=>{setfocused(projectCode)}}
    style={{top: peekPosition, zIndex: focused === projectCode? '2': '1'}} onHoverStart={peekWindows} onHoverEnd={donePeekingWindows} onDragEnd={donePeekingWindows}>
        <motion.div className={styles.windowBar}>
            <motion.div className={styles.dot} style={{backgroundColor: "#ff4d4d"}}></motion.div>
            <motion.div className={styles.dot} style={{backgroundColor: "#ffcc00"}}></motion.div>
            <motion.div className={styles.dot} style={{backgroundColor: "#47d147"}}></motion.div>
        </motion.div>
        <motion.div className={styles.windowTitle}>
            <div style={{display: "flex", alignItems: "center" }}>
                <img src={projectDetails.imagePath} width={30} height={30} style={{marginRight: "20px", borderRadius: "10px"}}></img>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <motion.span className={styles.windowTitleText}>{projectDetails.title}</motion.span>
                    <motion.span className={styles.windowSubTitle}>{projectDetails.subHeading}</motion.span>
                </div>
            </div>
            <motion.span className={styles.projectDate}>{projectDetails.date}</motion.span>
        </motion.div>
        <motion.div className={styles.windowContent}>
            <motion.div className={styles.leftContent}>
                <motion.div className={styles.description}>
                    Description    
                </motion.div>
                <motion.div className={styles.techstack}>
                    tech Stack    
                </motion.div>
            </motion.div>
            <motion.div className={styles.snapshot}>
                <img src="/placeholder.png" height='100%'></img>   
            </motion.div>
        </motion.div>
    </motion.div>
    )
}