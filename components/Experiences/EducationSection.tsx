import styles from "./EducationSection.module.css";

export default function EducationSection() {
    return (
        <div className={styles.education}>
            <h2 className={styles.educationTitle}>Education</h2>
            <div className={styles.educationSection}>
                <img src="/bcit.png" width={175} />
                <span>Computer System Technology (CST) Dipolma</span>
            </div>
            <div className={styles.educationSection}>
                <img src="/sfu.webp" width={155} />
                <span>Bachelor of Business Administration</span>
            </div>
        </div>

    )
}