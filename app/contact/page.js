"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to handle direct email click
  const handleEmailClick = () => {
    window.location.href = `mailto:syeddaruman@gmail.com`
  }

  // Function to copy email address to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText("syeddaruman@gmail.com")
      .then(() => {
        alert("Email copied to clipboard!")
      })
      .catch((err) => {
        console.error("Could not copy email: ", err)
      })
  }

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.contactPage}>
      <AnimatedBackground />
      <div className="container">
        <h1 className="page-title">
          Contact <span className="neon-text">Me</span>
        </h1>

        <div className={styles.contactCard}>
          <h2 className={styles.cardTitle}>Get In Touch</h2>
          <p className={styles.contactText}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel
            free to reach out through any of the following channels.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem} onClick={handleEmailClick} style={{ cursor: "pointer" }}>
              <Mail className={styles.contactIcon} />
              <div>
                <h3>Email</h3>
                <p>syeddaruman@gmail.com</p>
                <small className={styles.clickToCopy}>(Click to send email)</small>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <div>
                <h3>Phone</h3>
                <p>647-469-9013</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <MapPin className={styles.contactIcon} />
              <div>
                <h3>Location</h3>
                <p>Mississauga, ON</p>
              </div>
            </div>
          </div>

          <h3 className={styles.socialTitle}>Connect With Me</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/ruman-syeda-94a07b304/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Ruman-Syeda" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github />
              <span>GitHub</span>
            </a>
            <a href="https://x.com/RumannSyeda" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Twitter />
              <span>Twitter</span>
            </a>
          </div>

          <div className={styles.resumeSection}>
            <h3>Looking for my resume?</h3>
            <a href="/resume.pdf" download className={styles.resumeButton}>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 
// CONTACT FORM CODE (COMMENTED OUT FOR FUTURE USE)
"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Check, Copy, AlertCircle, Loader2 } from 'lucide-react'
import AnimatedBackground from "@/components/AnimatedBackground"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeField, setActiveField] = useState(null)
  const [debugInfo, setDebugInfo] = useState("")

  const formRef = useRef(null)
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const subjectInputRef = useRef(null)
  const messageInputRef = useRef(null)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

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

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email address"
      }
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleFocus = (field) => {
    setActiveField(field)
  }

  const handleBlur = () => {
    setActiveField(null)
  }

  // Function to handle direct email click
  const handleEmailClick = () => {
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio")
    const body = encodeURIComponent(`
Name: ${formData.name || ""}
Email: ${formData.email || ""}
Message: ${formData.message || ""}
    `)
    window.location.href = `mailto:syeddaruman@gmail.com?subject=${subject}&body=${body}`
  }

  // Function to copy email address to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText("syeddaruman@gmail.com")
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
      .catch((err) => {
        console.error("Could not copy email: ", err)
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form before submission
    if (!validateForm()) {
      // Scroll to the first error
      if (formErrors.name) nameInputRef.current?.focus()
      else if (formErrors.email) emailInputRef.current?.focus()
      else if (formErrors.message) messageInputRef.current?.focus()
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")
    setSubmitStatus(null)
    setDebugInfo("")

    try {
      // Try the simple contact API first
      const apiUrl = "/api/email"
      console.log("Trying API endpoint:", apiUrl)

      let debugLog = "Attempting to send contact info via API...\n"

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        debugLog += `API response status: ${response.status}\n`

        if (!response.ok) {
          const status = response.status
          debugLog += `Error status: ${status}\n`

          // Try to get error details if possible
          try {
            const errorData = await response.json()
            debugLog += `Error details: ${JSON.stringify(errorData)}\n`
            throw new Error(`API error: ${errorData.error || errorData.details || `Status ${status}`}`)
          } catch (jsonError) {
            debugLog += `Failed to parse error JSON: ${jsonError.message}\n`
            // If we can't parse JSON, just throw with status
            throw new Error(`API returned status ${status}`)
          }
        }

        // If we get here, the response is OK, so parse the JSON
        const data = await response.json()
        debugLog += `Success response: ${JSON.stringify(data)}\n`

        setSubmitStatus("success")

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        return
      } catch (apiError) {
        debugLog += `API error: ${apiError.message}\n`
        console.error("API error:", apiError.message)

        // Fall back to direct email
        debugLog += "Falling back to direct email...\n"
        handleEmailClick()

        setDebugInfo(debugLog)
        throw new Error("Contact API failed. Opening email client instead.")
      }
    } catch (error) {
      console.error("Error in form submission:", error)
      setErrorMessage(`${error.message}. Using direct email as fallback.`)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)

      // Reset status after 8 seconds if it's a success
      if (submitStatus === "success") {
        setTimeout(() => {
          setSubmitStatus(null)
        }, 8000)
      }
    }
  }

  if (!mounted) {
    return (
      <div className={styles.contactPage}>
        <AnimatedBackground />
        <div className="container">
          <h1 className="page-title">
            Contact <span className="neon-text">Me</span>
          </h1>
          <div className={styles.loadingContainer}>
            <Loader2 className={styles.loadingIcon} />
            <p>Loading contact form...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.contactPage}>
      <AnimatedBackground />
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact <span className="neon-text">Me</span>
        </motion.h1>

        <motion.div className={styles.contactContent} variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <h2 className="section-heading">Get In Touch</h2>
            <p className={styles.contactText}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Feel free to contact me using the form or through my contact information.
            </p>

            <div className={styles.contactDetails}>
              <motion.div
                className={styles.contactItem}
                whileHover={{ x: 5, boxShadow: "0 0 15px rgba(0, 238, 255, 0.3)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={copyEmailToClipboard}
                style={{ cursor: "pointer" }}
              >
                <Mail className={styles.contactIcon} />
                <div>
                  <h3>Email</h3>
                  <p>syeddaruman@gmail.com</p>
                  <small className={styles.clickToCopy}>(Click to copy)</small>
                </div>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ x: 5, boxShadow: "0 0 15px rgba(0, 238, 255, 0.3)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Phone className={styles.contactIcon} />
                <div>
                  <h3>Phone</h3>
                  <p>647-469-9013</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ x: 5, boxShadow: "0 0 15px rgba(0, 238, 255, 0.3)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <MapPin className={styles.contactIcon} />
                <div>
                  <h3>Location</h3>
                  <p>Mississauga, ON</p>
                </div>
              </motion.div>
            </div>

            <div className={styles.socialLinks}>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, boxShadow: "0 0 15px rgba(0, 238, 255, 0.5)" }}
                whileTap={{ scale: 0.9 }}
                className={styles.socialLink}
              >
                <Linkedin />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, boxShadow: "0 0 15px rgba(0, 238, 255, 0.5)" }}
                whileTap={{ scale: 0.9 }}
                className={styles.socialLink}
              >
                <Github />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, boxShadow: "0 0 15px rgba(0, 238, 255, 0.5)" }}
                whileTap={{ scale: 0.9 }}
                className={styles.socialLink}
              >
                <Twitter />
              </motion.a>
            </div>

            <motion.div
              className={styles.directEmailButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.button
                onClick={handleEmailClick}
                className={styles.emailButton}
                whileHover={{ y: -3, boxShadow: "0 0 20px rgba(0, 238, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Open Email Client</span>
              </motion.button>

              <motion.button
                onClick={copyEmailToClipboard}
                className={styles.copyButton}
                whileHover={{ y: -3, boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Copied!" : "Copy Email Address"}</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div className={styles.contactForm} variants={itemVariants} ref={formRef}>
            <h2 className="section-heading">Send Me a Message</h2>

            <div className={styles.formNote}>
              <AlertCircle size={16} />
              <p>All fields marked with * are required</p>
            </div>

            <AnimatePresence>
              {submitStatus === "error" && (
                <motion.div
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <AlertCircle size={18} />
                  <div>
                    <p>There was an error sending your message:</p>
                    {errorMessage && <p className={styles.errorDetail}>{errorMessage}</p>}
                    <p>Please try the direct email option instead.</p>
                    {debugInfo && (
                      <details className={styles.debugDetails}>
                        <summary>Technical Details</summary>
                        <pre className={styles.debugInfo}>{debugInfo}</pre>
                      </details>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit}>
              <div className={`${styles.formGroup} ${activeField === "name" ? styles.activeField : ""}`}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  className={`${styles.formInput} ${formErrors.name ? styles.inputError : ""}`}
                  ref={nameInputRef}
                />
                <AnimatePresence>
                  {formErrors.name && (
                    <motion.p
                      className={styles.errorText}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {formErrors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className={`${styles.formGroup} ${activeField === "email" ? styles.activeField : ""}`}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  className={`${styles.formInput} ${formErrors.email ? styles.inputError : ""}`}
                  ref={emailInputRef}
                />
                <AnimatePresence>
                  {formErrors.email && (
                    <motion.p
                      className={styles.errorText}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {formErrors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className={`${styles.formGroup} ${activeField === "subject" ? styles.activeField : ""}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={handleBlur}
                  placeholder="Subject"
                  className={styles.formInput}
                  ref={subjectInputRef}
                />
              </div>

              <div className={`${styles.formGroup} ${activeField === "message" ? styles.activeField : ""}`}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  placeholder="Your Message"
                  rows={5}
                  className={`${styles.formTextarea} ${formErrors.message ? styles.inputError : ""}`}
                  ref={messageInputRef}
                />
                <AnimatePresence>
                  {formErrors.message && (
                    <motion.p
                      className={styles.errorText}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {formErrors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 238, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.loadingSpinner}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className={styles.sendIcon} />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Check size={18} />
                    <p>Your message has been sent successfully! I'll get back to you as soon as possible.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
*/
