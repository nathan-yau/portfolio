'use client'

import styles from './page.module.css'
import NavMenu from '../../components/NavMenu'
import {motion, AnimatePresence} from 'framer-motion'
import SectionNav from '../../components/SectionNav'
import DefaultPage from '../../components/Home'
import { useState } from 'react'
import ProjectsPage from '../../components/Projects'
import ExperiencesPage from '../../components/Experiences'
import SkillsPage from '../../components/Skills'
import ContactPage from '../../components/Contact'

export default function Home() {
  const [gitHubHover, setGitHubHover] = useState(false)
  const [linkedinHover, setLinkedinHover] = useState(false)
  const [ViewWindow, setViewWindow] = useState("Home")
  
  function handleGitHubClick() {
    window.open("https://github.com/nathan-yau")
  }

  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/nathanyau92/")
  }

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
          <NavMenu></NavMenu>
        </div>
      </div>

      {/* Nav Done Here */}
        <AnimatePresence mode='wait'>
          {ViewWindow === "Home"? 
              <motion.div
              key="home"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={styles.bannerSection}
            >
              <DefaultPage />
              </motion.div>
               : ViewWindow === "Projects"? 
               <motion.div
               key="projects"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className={styles.projectSection}
             >
               <ProjectsPage />
               </motion.div>
                : ViewWindow === "Experiences"?
                <motion.div
                key="home"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.bannerSection}
              >
                <ExperiencesPage />
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


      <div className={styles.grid}>
      <div
          className={styles.card}
          onClick={() => setViewWindow("Experiences")}
        >
          <h2>
          Experiences<span>-&gt;</span>
          </h2>
          <p>Former Project Coordinator turned Computer Science student.</p>
        </div>

        <div
          className={styles.card}
          onClick={() => setViewWindow("Projects")}
        >
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Check out some of my projects.</p>
        </div>

        <div
          className={styles.card}
          onClick={() => setViewWindow("Skills")}
        >
          <h2>
            Skills <span>-&gt;</span>
          </h2>
          <p>Familiar with multiple programming languages and frameworks.</p>
        </div>


        <div
          className={styles.card}
          onClick={() => setViewWindow("Contact")}
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            Let's start a conversation.
          </p>
        </div>
      </div>
      <div className={styles.footerSection}>
          <p>Last Updated: 29 July 2023 Nathan Yau</p>
      </div>
    </main>
  )
}
