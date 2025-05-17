"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          RS
        </Link>
      </div>

      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className={pathname === "/about" ? styles.active : ""}>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className={pathname === "/skills" ? styles.active : ""}>
          <Link href="/skills" onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li className={pathname === "/experience" ? styles.active : ""}>
          <Link href="/experience" onClick={closeMenu}>
            Experience
          </Link>
        </li>
        <li className={pathname === "/certificates" ? styles.active : ""}>
          <Link href="/certificates" onClick={closeMenu}>
            Certificates
          </Link>
        </li>
        <li className={pathname === "/contact" ? styles.active : ""}>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
