import { motion } from "framer-motion";
import styles from "./ProfiloLabel.module.css";
import { workExperience } from '../Data/workexperience'

export default function ProfileLabel({delaySecond, showCompanyDetail = -1}: {delaySecond: number, showCompanyDetail?: number}) {
    return (
        <motion.div                            
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay: delaySecond}}
        className={styles.profliolabel}>
            <span>{showCompanyDetail >= 0? workExperience[showCompanyDetail].company : 'Full Stack Developer'}</span>
            <span>{showCompanyDetail >= 0? `(${workExperience[showCompanyDetail].date})` : 'Operation Optimization Specialist'}</span>
            <span>{showCompanyDetail >= 0? null : 'Project Coordinator'}</span>
            {showCompanyDetail >= 0 && <span style={{color: "black", fontSize: "1.1rem", marginTop: "5px"}}>Achievement</span>}
            { showCompanyDetail >= 0? 
                workExperience[showCompanyDetail].acheivement.map((item, index) => (
                    <motion.div 
                    style={{display: "flex", flexDirection: "column", gap: "7px", justifyContent: "center", alignItems: "center"}}>
                        <span className={styles.companyAcheivement}>{item.tag}</span>
                        <span className={styles.companyAcheivementDescription}>{item.details}</span>
                    </motion.div>
                ))
                :  null
            }
        </motion.div>

    )
}