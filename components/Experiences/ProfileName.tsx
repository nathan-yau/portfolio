import {motion} from 'framer-motion'
import styles from './ProfileName.module.css'
import { workExperience } from '../Data/workexperience'

export default function ProfileName({showCompanyDetail = -1}: {showCompanyDetail?: number}) {
    
    const showCompanyName = {
        '--size' : showCompanyDetail >= 0? '100%' : '10ch',
    } as React.CSSProperties;

    return (
        <div className={styles.BlinkinEffect}>
            <motion.h1 className={styles.typingEffect} style={showCompanyName}> {showCompanyDetail >= 0? workExperience[showCompanyDetail].title : 'Nathan Yau'}</motion.h1>
        </div>
    )
}