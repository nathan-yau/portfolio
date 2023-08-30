import { motion, AnimatePresence, color } from "framer-motion";
import styles from "./Projects.module.css";
import { useEffect, useState } from "react";
import ProjectWindows from "../Project/ProjectWindows";
import {currentproject} from "../Data/currentproject";

interface ProjectDetailItem {
    title: string;
    date: string;
    imagePath: string;
    subHeading: string;
    startXIndex: string;
    startYIndex: string;
    startZIndex: string;
  }


export default function ProjectsPage({windowWidth}: {windowWidth: number}) {
    const [opening, setopening] = useState<Boolean>(true)
    const [projectDetail, setprojectDetail] = useState<{ [key: string]: ProjectDetailItem }>({});
    const [focused, setfocused] = useState("Project5")
    // const [minmized, setminimized] = useState(false)
    const [reset, setreset] = useState(false)

    const windowsPosition: any = {
        Project1: "70px",
        Project2: "130px",
        Project3: "190px",
        Project4: "250px",
        Project5: "310px"

    }

    useEffect(() => {setprojectDetail(currentproject)}, [])
       
        

    return (
        <>
        {opening &&   
        <motion.div 
            initial={{opacity: 0, rotateX: 360}}
            animate={{opacity: 1, rotateX: 0}}
            style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <motion.div className={styles.folder}
                initial={{x: "0px", y: "0px", scale: 1, opacity: 1}}
                animate={{x: "0px", y: "-500px", scale: 0.10, opacity: 0}}
                transition={{ duration: 0.75, delay: 3.0 }}
                onAnimationComplete={()=>{setopening(false)}}
            ></motion.div>
            <motion.div className={styles.cursor}
            initial={{opacity: 0, x: "90px", y: "150px"}}
            animate={{opacity: 1, x: "70px", y: "-80px"}}
            transition={{
                opacity: { duration: 1, delay: 0.25 },
                x: { duration: 0.5, delay: 1 },
                y: { duration: 0.5, delay: 1 }
                }}
            >
            </motion.div>
            <motion.h1
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            transition={{
                opacity: { duration: 1, delay: 2.5 },
            }}
            >Projects</motion.h1>
        </motion.div>
        }
        {!opening &&
        <> 
        {Object.entries(projectDetail).map(([key, value]) => (
        <ProjectWindows
            key={key}
            focused={focused}
            reset={reset}
            setfocused={setfocused}
            projectCode={key}
            windowsPosition={windowsPosition[key]}
            projectDetails={value}
            windowWidth={windowWidth}
        />
        ))}
        <motion.div 
            initial={{opacity: 0, rotateX: 360, x: "-50%"}}
            animate={{opacity: 1, rotateX: 0, x: "-50%"}}
            exit={{opacity: 0, y: "-500px", x: "-50%"}}
        className={styles.selector} onClick={()=> {setreset(true); setfocused('Project5'); setTimeout(() => setreset(false), 500)}}>
            <span>Reset Window</span>
            <img src="/reset.svg" width={20} height={20}></img>
        </motion.div>
        </>
    }
        </>
    )
}