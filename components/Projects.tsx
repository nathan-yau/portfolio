import { motion, AnimatePresence, color } from "framer-motion";
import styles from "./Projects.module.css";
import { useEffect, useState } from "react";
import ProjectWindows from "./ProjectWindows";

interface ProjectDetailItem {
    title: string;
    date: string;
    imagePath: string;
    subHeading: string;
    startXIndex: string;
    startYIndex: string;
    startZIndex: string;
  }


export default function ProjectsPage() {
    const [opening, setopening] = useState<Boolean>(true)
    const [projectDetail, setprojectDetail] = useState<{ [key: string]: ProjectDetailItem }>({});
    const [focused, setfocused] = useState("Project5")
    // const [minmized, setminimized] = useState(false)
    const [reset, setreset] = useState(false)

    const windowsPosition: any = {
        Project1: "100px",
        Project2: "180px",
        Project3: "260px",
        Project4: "340px",
        Project5: "420px"

    }
    
    var currentproject: any = {
        Project1: {
            title: "LifeLine",
            date: "Jan to Apr 2023",
            imagePath: "/lifeline.svg",
            subHeading: "Web Community",
            startXIndex: "-75%",
            startYIndex: "-10%",
            startZIndex: "1"
        }, 
        Project2: {
            title: "BCIT Hack the Break 2023",
            date: "Mar 2023",
            imagePath: "/hack-the-break.png",
            subHeading: "Occupation Supportive Mental Health Web App",
            startXIndex: "-65%",
            startYIndex: "-5%",
            startZIndex: "1"
        },
        Project3: {
            title: "Oasis of the Lost Adventure",
            date: "Apr 2023",
            imagePath: "/oasis.png",
            subHeading: "Python GUI based Adventure Game",
            startXIndex: "-55%",
            startYIndex: "0%",
            startZIndex: "1"
        },
        Project4: {
            title: "TableTrek",
            date: "Apr to May 2023",
            imagePath: "/tabletrek.png",
            subHeading: "AI-powered Mechline resturant Discovery Web App",
            startXIndex: "-45%",
            startYIndex: "5%",
            startZIndex: "1"
        },
        Project5: {
            title: "Beanstalk",
            date: "Jun to Aug 2023",
            imagePath: "/beanstalk.png",
            subHeading: "Investment Tracker",
            startXIndex: "-35%",
            startYIndex: "10%",
            startZIndex: "1"
        }
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
                animate={{x: "-500px", y: "-500px", scale: 0.10, opacity: 0}}
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
        />
        ))}
        <div className={styles.selector}>
            <img src="/reset.svg" width={40} height={40} style={{cursor: "pointer", border: "2px solid black", borderRadius: "5px", padding: "7px"}} onClick={()=> {setreset(true); setfocused('Project5'); setTimeout(() => setreset(false), 500)}}></img>
        </div>
        </>
    }
        </>
    )
}