"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"
import styles from "./page.module.css"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const welcomeText = "WELCOME TO MY PORTFOLIO"
  const skills = ["UI/UX Designer", "Web Developer", "Software Engineer", "Full Stack Developer", "Problem Solver"]

  useEffect(() => {
    setMounted(true)

    const handleTyping = () => {
      const current = loopNum % skills.length
      const fullText = skills[current]

      setDisplayText(
        isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1),
      )

      setTypingSpeed(isDeleting ? 80 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, skills, typingSpeed])

  if (!mounted) return null

  return (
    <div className={styles.main}>
      <AnimatedBackground />
      <div className={styles.content}>
        <div className={styles.hero}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.welcomeText}
          >
            {welcomeText}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.name}
          >
            Ruman Syeda
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={styles.typingContainer}
          >
            {displayText}
            <span className="cursor"></span>
          </motion.div>

          <div className={styles.buttonContainer}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <Link href="/about" className={styles.aboutButton}>
                About Me <span className={styles.arrow}>→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <Link href="/contact" className={styles.contactButton}>
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              <a href="/resume.pdf" download className={styles.resumeButton}>
                <Download size={20} />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className={styles.scrollIndicator}
          >
            <p>Scroll down to explore</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.scrollIcon}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div> */}
        </div>
      </div>
    </div>
  )
}
