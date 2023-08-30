import styles from './MobileProjectSection.module.css'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { currentproject } from '../Data/currentproject'


export default function ProjectSecion() {
    return (
        <>
        <div className={styles.projects}>
            <div className={styles.Title}>
                <h1>Projects</h1>
            </div>
            <div className={styles.Content}>
                {
                    Object.keys(currentproject).map((project: any, index: number) => (
                        <div className={styles.projectBox} key={project}>
                            <div className={styles.leftside}>
                                <div className={styles.projectTitle}>
                                    <h2>{currentproject[project].title} </h2>
                                    <h5>{currentproject[project].subHeading}</h5>
                                </div>
                                <div className={styles.projectDescription}>
                                    <p>{currentproject[project].description}</p>
                                </div>
                                <div className={styles.projectTech}>
                                    {
                                        currentproject[project].techstack.map((tech: any, index: number) => (
                                            <p className={styles.techitem}>{tech}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.rightside}>
                                <img src={currentproject[project].demoPicture} className={styles.projectImage}></img>
                            </div>
                        </div>
                    ))
                }
                
            </div>
                        
        </div>
        </>
    )
}