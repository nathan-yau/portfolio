import styles from './Dock.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Dock({setViewWindow, timeoutRef, isTransitioning, setIsTransitioning}: {setViewWindow: Function, timeoutRef: NodeJS.Timeout | null, isTransitioning: boolean, setIsTransitioning: Function}) {

    const handleItemClick = (item: string) => {
        setIsTransitioning(true)
        setViewWindow(item)
        timeoutRef && clearTimeout(timeoutRef)
        setTimeout(() => {
            setIsTransitioning(false)
        }
        , 500)
    }

    return (
        <motion.div 
        initial={{ opacity: 0, y: 200}}
        animate={{ opacity: 1 , y: 0}}
        transition={{
            delay: 2.5
        }}
        className={styles.dockSection}>
            <motion.div 
                className={styles.dockIcon}
                whileTap={{ scale: 0.8}}
                whileHover={{ scale: 1.1}}
            >
                <div className={`${styles.dockImage} ${styles.dockExperience}`} style= {{backgroundColor: "rgba(27,167,248,255)"}} onClick={() => !isTransitioning && handleItemClick("Experiences")}>
                <img src='/experience.svg' alt="experience"/>
                </div>
                <span className={styles.label}>Experiences</span>
            </motion.div>
            <motion.div 
                className={styles.dockIcon}
                whileTap={{ scale: 0.8}}
                whileHover={{ scale: 1.1}}
            >
                <div className={`${styles.dockImage} ${styles.dockProjects}`} onClick={() => !isTransitioning && handleItemClick("Projects")}>
                <img src='/projects.svg' alt="projects" />
                </div>
                <span className={styles.label}>Projects</span>
            </motion.div>
            <motion.div 
                className={styles.dockIcon}
                whileTap={{ scale: 0.8}}
                whileHover={{ scale: 1.1}}
            >
                <div className={`${styles.dockImage} ${styles.dockSkills}`} onClick={() => !isTransitioning && handleItemClick("Skills")}>
                <img src='/tools.svg' alt="skills"/>
                </div>
                <span className={styles.label}>Skills</span>
            </motion.div>
            <motion.div 
                className={styles.dockIcon}
                whileTap={{ scale: 0.8}}
                whileHover={{ scale: 1.1}}
            >
                <div className={`${styles.dockImage} ${styles.dockProjects}`}  onClick={() => !isTransitioning && handleItemClick("Contact")}>
                    <img src='/contact.svg' alt="contact" style={{transform: "translateX(2px)"}} />
                </div>
                <span className={styles.label}>Contact</span>
            </motion.div>
        </motion.div>    
        
    )
}