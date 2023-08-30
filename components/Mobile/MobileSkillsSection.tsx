import styles from './MobileSkillsSection.module.css'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export default function SkillsSecion() {
    const icon_size = 50
    return (
        <>
        <div className={styles.skills}>
            <div className={styles.skillsTitle}>
                <h1>Skills</h1>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsContentTitle}>
                    <h2>Programming Languages</h2>
                </div>
                <div className={styles.skillsContentContent}>
                    <div className={styles.skillsBox}>
                        <img src="/python.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Python</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/javascript.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>JavaScript</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/typeScript.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>TypeScript</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/sql.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>SQL</span>
                    </div>
                </div>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsContentTitle}>
                    <h2>Frontend</h2>
                </div>
                <div className={styles.skillsContentContent}>
                    <div className={styles.skillsBox}>
                        <img src="/react.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>React</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/nextjs.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Next.js</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/ejs.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Ejs</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/html.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>HTML</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/css.svg" className={styles.skillsIcon} width={icon_size-15}></img>
                        <span>CSS</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/bootstrap.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Bootstrap</span>
                    </div>
                </div>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsContentTitle}>
                    <h2>Backend</h2>
                </div>
                <div className={styles.skillsContentContent}>
                    <div className={styles.skillsBox}>
                        <img src="/nodejs.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Node.js</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/express.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Express</span>
                    </div>
                </div>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsContentTitle}>
                    <h2>Database</h2>
                </div>
                <div className={styles.skillsContentContent}>
                    <div className={styles.skillsBox}>
                        <img src="/mongodb.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>MongoDB</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/firebase.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Firebase</span>
                    </div>
                </div>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsContentTitle}>
                    <h2>Tools</h2>
                </div>
                <div className={styles.skillsContentContent}>
                    <div className={styles.skillsBox}>
                        <img src="/git.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Git</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/github.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>GitHub</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/vscode.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>VS Code</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/pycharm.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>PyCharm</span>
                    </div>
                </div>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsContentTitle}>
                    <h2>Platform</h2>
                </div>
                <div className={styles.skillsContentContent}>
                    <div className={styles.skillsBox}>
                        <img src="/windows.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Windows</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/macos.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>MacOS</span>
                    </div>
                </div>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsContentTitle}>
                    <h2>Project Method</h2>
                </div>
                <div className={styles.skillsContentContent}>
                    <div className={styles.skillsBox}>
                        <img src="/agile.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Agile</span>
                    </div>
                    <div className={styles.skillsBox}>
                        <img src="/waterfall.svg" className={styles.skillsIcon} width={icon_size}></img>
                        <span>Waterfall</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}