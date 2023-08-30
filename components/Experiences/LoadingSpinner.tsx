import { motion } from 'framer-motion';
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
    return (
        <>
            <motion.h5 className={styles.loadingText}>
            </motion.h5>
            <motion.div 
                initial={{opacity:1}}
                animate={{opacity:0, height: 0}}
                transition={{
                    delay: 3.0
                }}
            className={styles.loadingSpinner}>
            </motion.div>
        </>
    )
}