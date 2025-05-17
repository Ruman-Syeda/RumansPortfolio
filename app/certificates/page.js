"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"
import styles from "./certificates.module.css"

export default function CertificatesPage() {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

 const certificates = [
  {
    id: 1,
    title: "Mental Health Hackathon Participation",
    issuer: "WILWork",
    date: "March 2024",
    description:
      "Participated in a hackathon hosted by WILWork focused on improving their marketing and website through student-driven mental health initiatives and innovative ideas.",
    image: "/mentalhealthCert.png?height=400&width=600",
    skills: ["Mental Health", "Web Strategy", "Team Collaboration", "UI/UX Ideation"],
    link: "/certificates/mental-health.pdf",
  },
  {
    id: 2,
    title: "Emergency Preparedness Hackathon - 3rd Place",
    issuer: "City of Toronto",
    date: "February 2024",
    description:
      "Secured 3rd place in a city-wide hackathon by proposing website improvements and designing an accessible, budget-friendly pamphlet for emergency preparedness.",
    image: "/emergency.png?height=400&width=600",
    skills: ["Public Safety", "Graphic Design", "User Experience", "Teamwork"],
    link: "/certificates/emergency-preparedness.pdf",
  },
  {
    id: 3,
    title: "Maple Care App - 1st Place Hackathon",
    issuer: "Action Canada",
    date: "January 2024",
    description:
      "Won 1st place by developing ‘Maple Care,’ an app that compares sexual health policies across Canadian provinces and improves access to information for youth.",
    image: "/mapleCert.png?height=400&width=600",
    skills: ["App Development", "Policy Research", "Sexual Health", "Innovation"],
    link: "/certificates/maple-care.pdf",
  },
  {
    id: 4,
    title: "Three.js Workshop Participation",
    issuer: "CCSAI - Led by Narendra Pershad",
    date: "November 2023",
    description:
      "Participated in an engaging workshop on Three.js, learning how to integrate 3D elements into web applications and enhance interactivity.",
    image: "/threejs.png?height=400&width=600",
    skills: ["Three.js", "3D Web", "Frontend Development", "JavaScript"],
    link: "/certificates/threejs-workshop.pdf",
  },
]



  const handleCertificateClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.certificatesPage}>
      <AnimatedBackground />
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates & <span className="neon-text">Awards</span>
        </motion.h1>

        <motion.p
          className={styles.pageDescription}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          These certificates represent my commitment to continuous learning and professional development in the field of
          software engineering.
        </motion.p>

        <div className={styles.certificatesGrid}>
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className={`${styles.certificateCard} ${activeIndex === index ? styles.active : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              onClick={() => handleCertificateClick(index)}
            >
              <div className={styles.certificateHeader}>
                <Award className={styles.certificateIcon} />
                <h2>{certificate.title}</h2>
              </div>

              <div className={styles.certificateInfo}>
                <div className={styles.issuerInfo}>
                  <p className={styles.issuer}>{certificate.issuer}</p>
                  <p className={styles.date}>
                    <Calendar size={14} />
                    <span>{certificate.date}</span>
                  </p>
                </div>

                <div className={styles.certificateImageContainer}>
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    width={600}
                    height={400}
                    className={styles.certificateImage}
                  />
                </div>

                <p className={styles.description}>{certificate.description}</p>

                <div className={styles.skillsContainer}>
                  {certificate.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>

                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className={styles.viewCertificate}>
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
