'use client';

import styles from './NavMenu.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <motion.div className={`${styles.navMenu}`}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                  duration: 2.5
                }}
        >
            <div className={menuOpen ? `${styles.open} ${styles.navIcon}` : `${styles.navIcon}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </motion.div>
    )
}

