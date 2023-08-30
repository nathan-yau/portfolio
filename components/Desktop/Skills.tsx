import { motion, AnimatePresence } from "framer-motion";
import styles from "./Skills.module.css";
import { useState, useEffect } from "react";
import {skills} from "../Data/skills";

export default function SkillsPage() {
  const icon_size = 50;
  const sections = [{name: "languages", title: "Programming Languages"}, 
                    {name: "frontend", title: "Frontend"}, 
                    {name: "backend", title: "Backend"}, 
                    {name: "databases", title: "Databases"}, 
                    {name: "tools", title: "Tools"}, 
                    {name: "platforms", title: "Platforms"}, 
                    {name: "method", title: "Project Methodologies"}]
    return (
      <>
                <motion.div 
                initial={{opacity:0, width: 0, height: 0, }}
                animate={{opacity:1, width: "min(65vw,1200px)", height: "65vh"}}
                className={styles.windows} 
                style={{overflow: "scroll"}}
                >
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className={styles.windowBar}>
                        <motion.div className={styles.dot} style={{backgroundColor: "#ff4d4d"}}></motion.div>
                        <motion.div className={styles.dot} style={{backgroundColor: "#ffcc00"}}></motion.div>
                        <motion.div className={styles.dot} style={{backgroundColor: "#47d147"}}></motion.div>
                    </motion.div>
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className={styles.skillsContent}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px", marginBottom: "20px"}}>
                            <img src="/nathan.jpg" width={80} style={{borderRadius: "50%"}}/>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <span style={{fontWeight: "bolder", fontSize: "1.25rem"}}>Nathan Yau</span>
                                <span style={{color: "grey", fontSize: "1.0rem"}}>Developer</span>
                            </div>
                        </div>
                        {sections.map((item) => (
                            <div style={{display: "flex", flexDirection: "column", marginBottom: "20px"}}>
                              <div className={styles.skillsContentTitle}>
                                  <h2>{item.title}</h2>
                              </div>
                              <div className={styles.skillsContentContent}>
                                  {
                                      skills[item.name].map((skill: any) => (
                                              <div className={styles.skillsBox}>
                                                  <img src={skill.imagePath} className={styles.skillsIcon} width={icon_size}></img>
                                                  <span>{skill.name}</span>
                                              </div>
                                      ))
                                  }
                                  
                              </div>
                            </div>
                          ))}
                    </motion.div>
                </motion.div>
            {/* <motion.div>
                <img src="/gear.svg" alt="gear" width={100} height={100} className={styles.gear}></img>
            </motion.div> */}
        </>
    )
}