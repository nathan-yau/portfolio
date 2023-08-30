import styles from './MobileSkillsSection.module.css'
import {skills} from "../Data/skills";

export default function SkillsSecion() {
    const icon_size = 50
    const sections = [{name: "languages", title: "Programming Languages"}, 
                        {name: "frontend", title: "Frontend"}, 
                        {name: "backend", title: "Backend"}, 
                        {name: "databases", title: "Databases"}, 
                        {name: "tools", title: "Tools"}, 
                        {name: "platforms", title: "Platforms"}, 
                        {name: "method", title: "Project Methodologies"}]

    return (
        <>
        <div className={styles.skills}>
            <div className={styles.skillsTitle}>
                <h1>Skills</h1>
            </div>
            {sections.map((item) => (
                            <div className={styles.skillsContent}>
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
        </div>
        </>
    )
}