import styles from './ProfileIcon.module.css'
import {motion} from 'framer-motion'
import { workExperience } from '../Data/workexperience'

export default function ProfileIcon({showCompanyDetail = -1}: {showCompanyDetail?: number}) {
    
    const showImage = {
        '--image': showCompanyDetail >= 0? `url(${workExperience[showCompanyDetail].icon})`: `url('/nathan.jpg')`,
        '--radius': showCompanyDetail >= 0? '10%': '50%',
        '--size' : showCompanyDetail >= 0? '150px' : '250px',
    } as React.CSSProperties;

    return (
        <div className={styles.glowingbound}>
            <div className={styles.avatarbound} style={showImage}>
                    <div className={styles.profileImage} style={showImage}/>
                    <motion.img 
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    transition={{delay: 5.0, duration: 0.2}}
                    src="/logo.png" alt="avatar" className={styles.avatar}/>
            </div>
            <motion.div
            initial={{scale: 1}}
            animate={{scale: 0.9}}
            transition={{delay: 6.0}}
            className={styles.outerbound} />
        </div>
    )
}