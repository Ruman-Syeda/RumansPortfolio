"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"
import styles from "./experience.module.css"

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("projects")

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

  const projects = [
    {
      title: "Centennial Connect",
      subtitle: "Networking Platform",
      period: "Jan 2025 – Present",
      image: "/Connect.png?height=200&width=350",
      description:
        "A MERN-based networking platform for Centennial College students, alumni, and staff, ensuring seamless functionality across web and mobile platforms. Implementing Agile methodologies for efficient sprint management and collaboration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "MERN"],
      link: "https://centennial-connect-official.onrender.com/",
    },
    {
      title: "Booky",
      subtitle: "Book Management App",
      period: "Nov 2024 – Dec 2024",
      image: "/Booky.png?height=200&width=350",
      description:
        "A MERN-based book management web application, ensuring seamless functionality across desktops, tablets, and mobile devices. Implemented secure user authentication and real-time book tracking for an enhanced user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "MERN"],
      link: "https://booky-le7y.onrender.com/",
    },
    {
      title: "Real Estate Agent's Website",
      subtitle: "Responsive Website Using the Given Wireframe",
      period: "Apr 2024 – Apr 2024",
      image: "/realestate.png?height=200&width=350",
      description:
        "Developed a responsive website for a real estate agent using HTML and CSS, adhering to the provided wireframe. Ensured seamless functionality across desktops, tablets, and mobile devices. Followed best practices for responsive design and ensured compliance with Article 508 accessibility standards by avoiding non-compliant HTML tags.",
      technologies: ["HTML", "CSS", "Responsive Design", "Accessibility"],
      link: "http://studentweb.cencol.ca/usyeda1/Final%20Project/FinalProject.html",
    },
    {
      title: "Maple Care",
      subtitle: "Hackathon Project – Action Canada",
      period: "Mar 2024 – Mar 2024",
      image: "/Maple.png?height=200&width=350",
      description:
        "A responsive website developed during a hackathon hosted by Action Canada. Designed to empower policy advocates with tools to access, compare, and understand key healthcare-related policies across Canadian provinces. Features include a policy comparison module and intuitive navigation for accessibility.",
      technologies: ["Figma", "Next","HTML","CSS", "JavaScript", "Responsive Design", "Policy Comparison"],
      link: "https://care-compare-canada.lovable.app/", // replace with your actual repo or live link if different
    },
    {
      title: "Responsive Wireframe Website",
      subtitle: "Responsive Website Using the Given Wireframe",
      period: "Apr 2024 – Apr 2024",
      image: "/WireFrame.png?height=200&width=350",
      description:
        "Developed a responsive website using HTML, CSS and best practices ensuring seamless functionality across desktops, tablets, and mobile devices. Ensured adherence to Article 508 accessibility principles by avoiding non-compliant HTML tags in website development.",
      technologies: ["HTML", "CSS", "Responsive Design", "Accessibility"],
      link: "http://studentweb.cencol.ca/usyeda1/213Assignment4/assignment4.html#",
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Portfolio Website",
      period: "Jan 2024 – Present",
      image: "/portfolio.png?height=200&width=350",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience. Built using Next.js, React, and Tailwind CSS for a modern and responsive design.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      link: "https://rumanportfolio.onrender.com/",
    },
    {
      title: "Centennial Connect – Figma Prototype",
      subtitle: "UI/UX Design for a Networking Platform",
      period: "Dec 2024",
      image: "/prototype.png?height=200&width=350", // replace with actual image or placeholder
      description:
        "Designed a comprehensive high-fidelity Figma prototype for Centennial Connect, a networking platform tailored for students, alumni, and faculty. Focused on intuitive navigation, accessibility compliance, and mobile-first responsiveness. The prototype includes user flows for login, profile creation, group collaboration, event browsing, and chat features.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "Accessibility"],
      link: "https://www.figma.com/design/cgcptIUdbv93rXHkKG5noi/Nerve-Wrecker-s-team-library?t=V7icTptQ43zaPoaf-0", // replace with actual Figma URL
    }
    
    

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
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </motion.a>
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
