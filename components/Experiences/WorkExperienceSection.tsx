import styles from './WorkExperienceSection.module.css'
import { workExperience } from '../Data/workexperience'

export default function WorkExperienceSection({setShowCompany}: {setShowCompany: any}) {


    return (
        <div className={styles.experiences}>
            <h2 className={styles.aboutTitle}>Work Experience</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            {
                workExperience.map((item, index) => (
                    <div className={styles.companySection}>
                          <img src={item.icon} className={styles.companyIcon} onClick={()=>{setShowCompany(index)}}/>
                          {/* <span>{item.company}</span> */}
                          <span>{item.title}</span>
                    </div>
                ))
            }
            </div>
            <div style={{textAlign: "right", marginTop: "15px"}}>
                Click on the company icon to see more details
            </div>
        </div>
    )
}