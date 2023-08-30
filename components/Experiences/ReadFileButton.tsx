import {motion} from 'framer-motion'
import styles from './ReadFileButton.module.css'

export default function ReadFileButton() {
    return (
        <motion.div
            initial={{opacity:1}}
            animate={{opacity:0}}
            transition={{delay: 4.5}}>
        <motion.div
            initial={{opacity:0, height: 0}}
            animate={{opacity:1, height: '30px'}}
            transition={{delay: 3.0}}
            className={styles.readFile}>
                <h4>Read File</h4>
            </motion.div>
    </motion.div>
    )
}