"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"
import styles from "./experience.module.css"

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("projects")

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Education data from resume
  const education = [
    {
      institution: "Centennial College",
      program: "Software Engineering Technician Program",
      period: "Jan 2024 – Apr 2025",
      location: "Scarborough, ON",
      description: "School of Engineering Technology and Applied Science",
      gpa: "Grade Point Average (GPA): 4.1/4.5",
    },
  ]

  // Courses data from resume
  const courses = [
    {
      title: "Unix/Linux Operating Systems",
      institution: "Centennial College",
      period: "May 2024 – Sep 2024",
      location: "Scarborough, ON",
      description:
        "Completed the operating system concepts course focused on Linux, emphasizing file management, permissions, UNIX utilities, the shell environment, and basic networking and security principles. Students were introduced to basic system administration, shell scripting, and C programming. Also covered were installing and maintaining server applications, version control, and networking using Linux.",
    },
    {
      title: "Programming III",
      institution: "Centennial College",
      period: "Jan 2025 – Apr 2025",
      location: "Scarborough, ON",
      description:
        "Completed an advanced .NET development course focused on building robust, data-driven desktop applications using C#. Covered advanced topics such as generics, extension methods, linear data structures, delegates, asynchronous and parallel programming, advanced GUI, Entity Framework Core, and ML.NET framework.",
    },
    {
      title: "Software Testing and Quality Assurance",
      institution: "Centennial College",
      period: "Jan 2025 – Apr 2025",
      location: "Scarborough, ON",
      description:
        "Instructed on the goals of quality assurance and quality control activities performed during the life cycle of a software product. Focused on integrating test processes with agile software development methodologies. Practical exercises provided experience in test design, specification, execution, and automation using various tools through instructor-directed exercises and student-led research for knowledge sharing.",
    },
    {
      title: "Developing UI for Software Devices",
      institution: "Centennial College",
      period: "Jan 2025 – Apr 2025",
      location: "Scarborough, ON",
      description:
        "Covered the development and testing of software systems that interface with various smart devices. Provided hands-on experience in applying machine learning algorithms to automate tasks and developing conversational user interfaces. Areas of application included IoT devices, wearables, and autonomous cars.",
    },
    {
      title: "Java Programming",
      institution: "Centennial College",
      period: "Oct 2024 – Dec 2024",
      location: "Scarborough, ON",
      description:
        "Building on the fundamentals of Object-Oriented programming, this course covers Component-based Application Development and Database Connectivity using the Java programming language. Emphasizes the creation of complex GUI applications, interaction with databases using JDBC, and utilization of the Java Collections Framework.",
    },
  ]

  // Projects data from resume
  const projects = [
    {
      title: "Centennial Connect",
      subtitle: "Networking Platform",
      period: "Jan 2025 – Present",
      image: "/placeholder.svg?height=200&width=350",
      description:
        "A MERN-based networking platform for Centennial College students, alumni, and staff, ensuring seamless functionality across web and mobile platforms. Implementing Agile methodologies for efficient sprint management and collaboration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "MERN"],
    },
    {
      title: "Booky",
      subtitle: "Book Management App",
      period: "Nov 2024 – Dec 2024",
      image: "/placeholder.svg?height=200&width=350",
      description:
        "A MERN-based book management web application, ensuring seamless functionality across desktops, tablets, and mobile devices. Implemented secure user authentication and real-time book tracking for an enhanced user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "MERN"],
    },
    {
      title: "Real Estate Agent's Website",
      subtitle: "Responsive Website Using the Given Wireframe",
      period: "Apr 2024 – Apr 2024",
      image: "/placeholder.svg?height=200&width=350",
      description:
        "Developed a responsive website using HTML, CSS and best practices ensuring seamless functionality across desktops, tablets, and mobile devices. Ensured adherence to Article 508 accessibility principles by avoiding non-compliant HTML tags in website development.",
      technologies: ["HTML", "CSS", "Responsive Design", "Accessibility"],
    },
    {
      title: "Problem-solving with logic in C#",
      subtitle: "Methods and Arrays",
      period: "Mar 2024 – Mar 2024",
      image: "/placeholder.svg?height=200&width=350",
      description:
        "Demonstrated exceptional proficiency by completing 50 C# programming challenges within a rigorous timeframe of 3 days.",
      technologies: ["C#", "Algorithms", "Problem Solving", "Data Structures"],
    },
  ]

  return (
    <div className={styles.experiencePage}>
      <AnimatedBackground />
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="neon-text">Experience</span>
        </motion.h1>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === "projects" ? styles.active : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "education" ? styles.active : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.projectsGrid}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.projectImage}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={350}
                      height={200}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectHeader}>
                      <h3>{project.title}</h3>
                      <ExternalLink size={18} className={styles.externalLink} />
                    </div>
                    <h4>{project.subtitle}</h4>
                    <p className={styles.period}>{project.period}</p>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.educationContainer}
            >
              <motion.div className={styles.educationSection}>
                <h2 className={styles.sectionHeading}>Education</h2>
                <div className={styles.timeline}>
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className={styles.timelineItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={styles.timelineContent}>
                        <h3>{edu.program}</h3>
                        <h4>{edu.institution}</h4>
                        <p className={styles.period}>{edu.period}</p>
                        <p className={styles.location}>{edu.location}</p>
                        <p className={styles.description}>{edu.description}</p>
                        <p className={styles.gpa}>{edu.gpa}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className={styles.coursesSection}>
                <h2 className={styles.sectionHeading}>Courses</h2>
                <div className={styles.timeline}>
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      className={styles.timelineItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={styles.timelineContent}>
                        <h3>{course.title}</h3>
                        <h4>{course.institution}</h4>
                        <p className={styles.period}>{course.period}</p>
                        <p className={styles.location}>{course.location}</p>
                        <p className={styles.description}>{course.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
