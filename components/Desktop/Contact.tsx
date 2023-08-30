import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";
import { useState, useEffect } from "react";
import {skills} from "../Data/skills";

export default function ContentPage() {
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
                animate={{opacity:1, width: "min(50vw, 1000px)", height: "40vh"}}
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
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px", marginBottom: "20px", height: "100%"}}>
                            <div style={{width: "50%", display: "flex",justifyContent: "center", alignItems: "center", height: "100%"}}>
                                <img src="/nathan.jpg" style={{borderRadius: "50%", width: "75%"}}/>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", width: "50%", marginRight: "20px"}}>
                                <span style={{fontWeight: "bolder", fontSize: "1.25rem"}}>Nathan Yau</span>
                                <span style={{color: "grey", fontSize: "1.0rem"}}>Developer</span>
                                <div className={styles.contactSection}>
                                    <div className={styles.contactItem}>
                                        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                                            <img src="/location.svg" width={30}/>
                                            <span style={{fontWeight: "bolder"}}>Location: </span>
                                        </div>
                                        <span className={styles.contactDetail}>
                                            <span>
                                                Vancouver, BC
                                            </span>
                                        </span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                                            <img src="/email.svg" width={30}/>
                                            <span style={{fontWeight: "bolder"}}>Email: </span>
                                        </div>
                                        <span className={styles.contactDetail}>
                                            <span>
                                                <a href="mailto:nyau4@my.bcit.ca">nyau4@my.bcit.ca</a>
                                            </span>
                                        </span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                                            <img src="/github.svg" width={30}/>
                                            <span style={{fontWeight: "bolder"}}>GitHub: </span>
                                        </div>
                                        <span className={styles.contactDetail}>
                                            <span>
                                                <a href='https://github.com/nathan-yau'>nathan-yau</a>
                                            </span>
                                        </span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                                            <img src="/linkedin.svg" width={30}/>
                                            <span style={{fontWeight: "bolder"}}>LinkedIn: </span>
                                        </div>
                                        <span className={styles.contactDetail}>
                                            <span>
                                                <a href='https://www.linkedin.com/in/nathanyau92/'>Nathan Yau</a>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </motion.div>
                </motion.div>
            {/* <motion.div>
                <img src="/gear.svg" alt="gear" width={100} height={100} className={styles.gear}></img>
            </motion.div> */}
        </>
    )
}