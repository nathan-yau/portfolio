import styles from "./AboutSection.module.css";

export default function AboutSection({setShowCompany}: {setShowCompany?: any}) {
    const handleClick = () => {
        if (setShowCompany) {
            setShowCompany(-1);
        }
    };

    return (
        <div className={styles.about} onClick={handleClick}>
            <h2 className={styles.aboutTitle}>About</h2>
            <span>Technically sophisticated professional with over 5 years of success leading software upgrade projects and automating operational processes. </span>
            <span>Skilled in troubleshooting, full stack development and user acceptance testing (UAT) procedures. </span>
            <span>Talent for quickly learning new procedures and technologies.</span>
        </div>

    )
}