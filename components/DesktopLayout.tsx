'use client'

import styles from './DesktopLayout.module.css'
// import NavMenu from '../../components/NavMenu'
import {motion, AnimatePresence} from 'framer-motion'
import SectionNav from './Nav/SectionNav'
import DefaultPage from './Home/Home'
import { useState, useEffect } from 'react'
import ProjectsPage from './Desktop/Projects'
import ExperiencesPage from './Desktop/Experiences'
import SkillsPage from './Desktop/Skills'
import ContactPage from './Desktop/Contact'
import Dock from './Dock/Dock'
import MobileContactSection from './Mobile/MobileContactSection'

export default function DesktopHome({windowWidth}: {windowWidth: number}) {
  const [gitHubHover, setGitHubHover] = useState(false)
  const [linkedinHover, setLinkedinHover] = useState(false)
  const [ViewWindow, setViewWindow] = useState("Home")

  function handleGitHubClick() {
    window.open("https://github.com/nathan-yau")
  }

  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/nathanyau92/")
  }

  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
      const id = setTimeout(() => {
        setViewWindow("Experiences")
      }, 2500)
      setTimeout(() => setIsTransitioning(false), 4000)
      setTimeoutRef(id)
    }, [])

  return (
    <main className={styles.main}>
      <div className={styles.navSection}>
        <SectionNav ViewWindow={ViewWindow}></SectionNav>
        
        <div className={styles.navRight}>
          <div style={{display: "flex", flexDirection: "column", position: "relative"}}>
            <motion.img src="/github.svg" alt="github" width={30} height={30}
              initial={{opacity:0, rotate: 0, y: -20}}
              animate={{opacity:1, rotate: 360, y: 0}}
              className={styles.thumbnails}
              onClick={handleGitHubClick}
              onHoverStart={() => {setGitHubHover(true); setLinkedinHover(false); setTimeout(() => setGitHubHover(false), 5000)}}
              onHoverEnd={() => setTimeout(() => setLinkedinHover(false), 3000)}
            />
            {gitHubHover &&
            <div className={styles.widget} style={{backgroundColor: "#000000"}}>
              <div className={styles.widgetHeader}>
                <span>ID: nathan-yau</span>
                <motion.img src="/right-arrow.svg" alt="githubLink" width={15} height={13}
                  initial={{ rotate: 0, x: -20}}
                  animate={{ rotate: 360, x: 0}}
                  onClick={handleGitHubClick}
                  style={{cursor: "pointer"}}
                />                
              </div>
            </div>
            }
          </div>
          <div style={{display: "flex", flexDirection: "column", position: "relative"}}>
            <motion.img src="/linkedin.svg" alt="linkedin" width={30} height={30}
              initial={{opacity:0, rotate: 0, y: -20}}
              animate={{opacity:1, rotate: 360, y: 0}}
              className={styles.thumbnails}
              onHoverStart={() => {setGitHubHover(false); setLinkedinHover(true)}}
              onHoverEnd={() => setTimeout(() => setLinkedinHover(false), 3000)}
              onClick={() => handleLinkedInClick()}
            />
            {linkedinHover &&
            <div className={`${styles.widget} ${styles.linkedIn}`} style={{backgroundColor: "#0072b1"}} id="LinkedIn">
              <div className={styles.widgetHeader}>
                <span>Nathan Yau</span>
                <motion.img src="/right-arrow.svg" alt="githubLink" width={15} height={13}
                  initial={{ rotate: 0, x: -20}}
                  animate={{ rotate: 360, x: 0}}
                  onClick={handleLinkedInClick}
                  style={{cursor: "pointer"}}
                />                
              </div>
            </div>
            }
          </div>
          {/* <NavMenu></NavMenu> */}
        </div>
      </div>
        <AnimatePresence  mode="wait">
          {ViewWindow === "Home"? 
              <motion.div
              key="home"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -20 }}
              className={styles.bannerSection}
              style={{zIndex: 0, position: "absolute"}}
            >
              <DefaultPage />
              </motion.div>
               : ViewWindow === "Projects"? 
               <motion.div
               key="projects"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className={`${styles.projectSection} ${styles.bannerSection}`}
             >
               <ProjectsPage windowWidth = {windowWidth}/>
               </motion.div>
                : ViewWindow === "Experiences"?
                <motion.div
                key="experiences"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.bannerSection}
              >
                <ExperiencesPage windowWidth = {windowWidth}/>
                </motion.div>
                : ViewWindow === "Skills"?
                <motion.div
                key="skills"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.bannerSection}
              >
                <SkillsPage />
                </motion.div>
                : ViewWindow === "Contact"?
                <motion.div
                key="contact"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.bannerSection}
              >
                <ContactPage />
                </motion.div>
                : null}
        </AnimatePresence>
    
        <Dock setViewWindow={setViewWindow} timeoutRef={timeoutRef} isTransitioning={isTransitioning} setIsTransitioning={setIsTransitioning}/>
      </main>
  )
}
