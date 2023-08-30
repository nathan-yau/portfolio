import styles from './MobileWorkExperienceSection.module.css'
import { workExperience } from '../Data/workexperience'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export default function WorkExperienceSection() {
    const [showCompany, setShowCompany] = useState(0)

    return (
        <div className={styles.experiences}>
            <h2 className={styles.title}>Work Experience</h2>
            <div className={styles.companySection}>
                {
                    workExperience.map((item, index) => (
                        <div className={styles.imageBorder}>
                            <img src={item.icon} className={styles.companyIcon} onClick={()=>{setShowCompany(index)}} style={{border: `${showCompany == index? "3px black solid": "unset"}`}}/>
                        </div>
                    ))
                }
            </div>
            <AnimatePresence mode="wait">
            <motion.div 
                key={showCompany}
                exit={{opacity: 0, x: 150}}
                initial={{opacity: 0, x: -150}}
                animate={{opacity: 1, x: 0}}
                className={styles.detailSection}>
                
                <div>
                    <h5>Company Name:</h5>
                    <span className={styles.companyName}>{workExperience[showCompany].company}</span>
                </div>
                <div>
                    <h5>Job Title:</h5>
                    <span className={styles.companyTitle}>{workExperience[showCompany].title}</span>
                </div>
                <div>
                    <h5>Date:</h5>
                    <span className={styles.companyDate}>{workExperience[showCompany].date}</span>
                </div>
                <div>
                    <h5>Acheivement:</h5>
                    {
                        workExperience[showCompany].acheivement.map((item, index) => (
                            <motion.div 
                            style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                <span className={styles.companyAcheivement}>{item.tag}</span>
                                <span className={styles.companyAcheivementDescription}>{item.details}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </motion.div>
            </AnimatePresence>
        </div>
    )
}