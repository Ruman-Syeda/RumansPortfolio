"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"
import styles from "./about.module.css"

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <AnimatedBackground />
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <div className={styles.aboutContent}>
          <div className={styles.profileSection}>
            <motion.div
              className={styles.profileImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Ruman Syeda"
                width={300}
                height={300}
                className={styles.avatar}
              />
            </motion.div>

            <motion.div
              className={styles.profileInfo}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Hello, I'm Ruman Syeda</h2>
              <p className={styles.bio}>
                Dynamic and goal-oriented Engineering Student seeking an internship opportunity as a Software Engineer
                Technician. Eager to apply and further develop skills in HTML, CSS, JavaScript, Python, Java and C#
                programming within a professional setting.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
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
                    className="icon"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Mississauga, ON</span>
                </div>

                <div className={styles.contactItem}>
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
                    className="icon"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>647-469-9013</span>
                </div>

                <div className={styles.contactItem}>
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
                    className="icon"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>syeddaruman@gmail.com</span>
                </div>

                <div className={styles.contactItem}>
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
                    className="icon"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Software Engineering Technician, Centennial College</span>
                </div>
              </div>

              <motion.div
                className={styles.resumeDownload}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a href="/resume.pdf" download className={styles.downloadButton}>
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className={styles.sections}>
            <motion.div
              className={`${styles.section} card`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className={styles.sectionTitle}>
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
                  className="icon"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                Education
              </h3>
              <div className={styles.educationItem}>
                <h4>Software Engineering Technician Program</h4>
                <p className={styles.institution}>
                  Centennial College - School of Engineering Technology and Applied Science
                </p>
                <p className={styles.period}>Jan 2024 - Apr 2025 | Scarborough, ON</p>
                <p className={styles.gpa}>GPA: 4.1/4.5</p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.section} card`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className={styles.sectionTitle}>
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
                  className="icon"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                Hobbies & Interests
              </h3>
              <div className={styles.interestsGrid}>
                <div className={styles.interestItem}>Video Games</div>
                <div className={styles.interestItem}>Photography</div>
                <div className={styles.interestItem}>Certifications</div>
                <div className={styles.interestItem}>Repairing Electronic Devices</div>
                <div className={styles.interestItem}>Graphic Designing</div>
                <div className={styles.interestItem}>Video Editing</div>
                <div className={styles.interestItem}>Game Development</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={`${styles.coursesSection} card`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>
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
                className="icon"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              Relevant Courses
            </h3>
            <div className={styles.coursesGrid}>
              <div className={styles.courseItem}>
                <h4>Unix/Linux Operating Systems</h4>
                <p className={styles.courseInfo}>Centennial College | May 2024 - Sep 2024</p>
                <p className={styles.courseDescription}>
                  Completed the operating system concepts course focused on Linux, emphasizing file management,
                  permissions, UNIX utilities, the shell environment, and basic networking and security principles.
                </p>
              </div>
              <div className={styles.courseItem}>
                <h4>Programming III</h4>
                <p className={styles.courseInfo}>Centennial College | Jan 2025 - Apr 2025</p>
                <p className={styles.courseDescription}>
                  Completed an advanced .NET development course focused on building robust, data-driven desktop
                  applications using C#.
                </p>
              </div>
              <div className={styles.courseItem}>
                <h4>Software Testing and Quality Assurance</h4>
                <p className={styles.courseInfo}>Centennial College | Jan 2025 - Apr 2025</p>
                <p className={styles.courseDescription}>
                  Instructed on the goals of quality assurance and quality control activities performed during the life
                  cycle of a software product.
                </p>
              </div>
              <div className={styles.courseItem}>
                <h4>Developing UI for Software Devices</h4>
                <p className={styles.courseInfo}>Centennial College | Jan 2025 - Apr 2025</p>
                <p className={styles.courseDescription}>
                  Covered the development and testing of software systems that interface with various smart devices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
