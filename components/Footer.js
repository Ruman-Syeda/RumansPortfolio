"use client"

import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>© 2025 Ruman Syeda. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <Link href="https://github.com/Ruman-Syeda" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/ruman-syeda-94a07b304/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
         <Link href="https://x.com/RumannSyeda" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1200 1227"
              fill="currentColor"
            >
              <path d="M714.2 508.2L1168.3 0H1062L670.8 459.4 357.4 0H0L478.1 705.5 0 1227h106.3l415.5-478.4L850.2 1227H1200L714.2 508.2ZM589.8 686.4l-47.9-68.7L142.2 82.6h156.1l316.5 454.3 47.9 68.7 429.2 615.8H936.4L589.8 686.4Z" />
            </svg>
          </Link>


          <Link href="https://instagram.com/iosonoromeo" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </Link>


          <Link href="mailto:syeddaruman@gmail.com" className={styles.socialLink}>
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
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}
