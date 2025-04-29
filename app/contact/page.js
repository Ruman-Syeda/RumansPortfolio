"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Check, Copy, AlertCircle } from "lucide-react"
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

  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.3 })

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
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")
    setSubmitStatus(null)

    try {
      // First try the primary endpoint
      const primaryApiUrl = "/api/send"
      let response

      try {
        console.log("Trying primary API endpoint:", primaryApiUrl)
        response = await fetch(primaryApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error(`Primary API returned ${response.status}`)
        }
      } catch (primaryError) {
        console.log("Primary API failed, trying fallback:", primaryError)

        // If primary fails, try the fallback endpoint
        const fallbackApiUrl = "/api/contact"
        response = await fetch(fallbackApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      }

      // Check if the response is ok
      if (!response.ok) {
        const contentType = response.headers.get("content-type")

        // Check if the response is JSON
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json()
          const errorDetail = errorData?.details || errorData?.error || "Server returned an error"
          setErrorMessage(errorDetail)
        } else {
          // If not JSON, get the text and provide a more generic error
          const errorText = await response.text()
          console.error("Non-JSON error response:", errorText)
          setErrorMessage(`Server error (${response.status}). Please try the direct email option instead.`)
        }

        setSubmitStatus("error")
        return
      }

      // If we get here, the response is OK, so parse the JSON
      const data = await response.json()
      console.log("Form submission successful:", data)

      // If we got a mailto link from the fallback API, open it
      if (data.mailtoLink) {
        window.location.href = data.mailtoLink
      }

      setSubmitStatus("success")

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error in form submission:", error)
      setErrorMessage(`Error: ${error.message}. Please try the direct email option instead.`)
      setSubmitStatus("error")

      // As a last resort, open the mailto link directly
      const subject = encodeURIComponent(formData.subject || "Contact from Portfolio")
      const body = encodeURIComponent(`
Name: ${formData.name || ""}
Email: ${formData.email || ""}
Message: ${formData.message || ""}
    `)
      window.location.href = `mailto:syeddaruman@gmail.com?subject=${subject}&body=${body}`
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

  return (
    <div className={styles.contactPage}>
      <AnimatedBackground />
      <div className="container">
        <h1 className="page-title">
          Contact <span className="neon-text">Me</span>
        </h1>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className="section-heading">Get In Touch</h2>
            <p className={styles.contactText}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Feel free to contact me using the form or through my contact information.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem} onClick={copyEmailToClipboard} style={{ cursor: "pointer" }}>
                <Mail className={styles.contactIcon} />
                <div>
                  <h3>Email</h3>
                  <p>syeddaruman@gmail.com</p>
                  <small className={styles.clickToCopy}>(Click to copy)</small>
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

            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Linkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Github />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Twitter />
              </a>
            </div>

            <div className={styles.directEmailButtons}>
              <button onClick={handleEmailClick} className={styles.emailButton}>
                <Mail size={20} />
                <span>Open Email Client</span>
              </button>

              <button onClick={copyEmailToClipboard} className={styles.copyButton}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Copied!" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>

          <div className={styles.contactForm} ref={formRef}>
            <h2 className="section-heading">Send Me a Message</h2>

            <div className={styles.formNote}>
              <AlertCircle size={16} />
              <p>All fields marked with * are required</p>
            </div>

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                <AlertCircle size={18} />
                <div>
                  <p>There was an error sending your message:</p>
                  {errorMessage && <p className={styles.errorDetail}>{errorMessage}</p>}
                  <p>Please try the direct email option instead.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`${styles.formInput} ${formErrors.name ? styles.inputError : ""}`}
                />
                {formErrors.name && <p className={styles.errorText}>{formErrors.name}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`${styles.formInput} ${formErrors.email ? styles.inputError : ""}`}
                />
                {formErrors.email && <p className={styles.errorText}>{formErrors.email}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`${styles.formTextarea} ${formErrors.message ? styles.inputError : ""}`}
                />
                {formErrors.message && <p className={styles.errorText}>{formErrors.message}</p>}
              </div>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
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
              </button>

              {submitStatus === "success" && (
                <div className={styles.successMessage}>
                  <Check size={18} />
                  <p>Your message has been sent successfully! I'll get back to you as soon as possible.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
