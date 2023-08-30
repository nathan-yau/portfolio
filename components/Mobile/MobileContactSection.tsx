import styles from './MobileContactSection.module.css'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export default function ContactSecion() {
    return (
        <>
        <div className={styles.contact}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "25px", marginBottom: "50px"}}>
                <img src="/nathan.jpg" width={80} style={{borderRadius: "50%"}}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span style={{fontWeight: "bolder", fontSize: "1.25rem"}}>Nathan Yau</span>
                    <span style={{color: "grey", fontSize: "1.0rem"}}>Developer</span>
                </div>
            </div>
            <h3 className={styles.title}>Contact</h3>
            <div className={styles.contactSection}>
                <div className={styles.contactItem}>
                    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <img src="/location.svg" width={30}/>
                        <span style={{fontWeight: "bolder"}}>Location: </span>
                    </div>
                    <span className={styles.contactDetail}>
                        <span>
                            Vancouver, BC
                        </span>
                    </span>
                </div>
                <div className={styles.contactItem}>
                    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <img src="/email.svg" width={30}/>
                        <span style={{fontWeight: "bolder"}}>Email: </span>
                    </div>
                    <span className={styles.contactDetail}>
                        <span>
                            nyau4@my.bcit.ca
                        </span>
                    </span>
                </div>
                <div className={styles.contactItem}>
                    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <img src="/github.svg" width={30}/>
                        <span style={{fontWeight: "bolder"}}>GitHub: </span>
                    </div>
                    <span className={styles.contactDetail}>
                        <span>
                            <a href='https://github.com/nathan-yau'>nathan-yau</a>
                        </span>
                    </span>
                </div>
                <div className={styles.contactItem}>
                    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <img src="/linkedin.svg" width={30}/>
                        <span style={{fontWeight: "bolder"}}>LinkedIn: </span>
                    </div>
                    <span className={styles.contactDetail}>
                        <span>
                            <a href='https://www.linkedin.com/in/nathanyau92/'>Nathan Yau</a>
                        </span>
                    </span>
                </div>
            </div>
            <div style={{marginTop: "50px"}}>
                Let's connect!
            </div>
        </div>
        </>
    )
}