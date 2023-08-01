'use client'

import { AnimatePresence, motion } from "framer-motion";
import styles from "./SectionNav.module.css";

export default function SectionNav({ViewWindow}: {ViewWindow: string}) {

  return (
    <motion.div className={styles.navPage}
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
      duration: 2.5
    }}

    >
    <AnimatePresence mode="wait">
        {ViewWindow === "Home" &&
        <motion.img src={"/home.svg"} alt="homepage" width={20} height={20} 
          initial={{opacity:0, display:'none'}}
          animate={{opacity:1, display:'block'}}
          exit = {{opacity:0, transition: { opacity: {duration: 0.5}}}}
          transition={{
            opacity: {duration: 1}
          }}
          >
        </motion.img>
        }
      </AnimatePresence>
      {ViewWindow === "Projects" &&
            <motion.img src={"/folder.svg"} alt="folder" width={20} height={20} 
            initial={{opacity:0, display:'none'}}
            animate={{opacity:1, display:'block', transition: { duration: 1, delay: 4.0 }}}
            exit = {{opacity:0, transition: { opacity: {duration: 0.5}}}}
            transition={{
              opacity: {duration: 1, delay: 3.25}
            }}
            >
        </motion.img>}
        {ViewWindow === "Experiences" &&
            <motion.img src={"/experiences.svg"} alt="folder" width={20} height={20} 
            initial={{opacity:0, display:'none'}}
            animate={{opacity:1, display:'block'}}
            exit = {{opacity:0, transition: { opacity: {duration: 0.5}}}}
            transition={{
              opacity: {duration: 1}
            }}
            >
        </motion.img>}
        {ViewWindow === "Skills" &&
            <motion.img src={"/skills.svg"} alt="folder" width={20} height={20} 
            initial={{opacity:0, display:'none'}}
            animate={{opacity:1, display:'block'}}
            exit = {{opacity:0, transition: { opacity: {duration: 0.5}}}}
            transition={{
              opacity: {duration: 1}
            }}
            >
        </motion.img>}
      <motion.p
          key={ViewWindow}
          initial={{opacity:0, x: -20, width: 0}}
          animate={{opacity:1, x: 0, width: '100%'}}
          transition={{
            duration: 0.75
          }}
          >
          {ViewWindow}
      </motion.p>
  </motion.div>

  )
}