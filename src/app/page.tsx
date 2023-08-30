'use client'
import styles from './page.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import DesktopHome from '../../components/DesktopLayout'
import MobilePage from '../../components/MobilePage'
import { useState, useEffect } from 'react'

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <>
      {windowWidth > 850 ? (
        <DesktopHome windowWidth={windowWidth} />
      ) : (
        <MobilePage />
      )}
    </>
  );
}