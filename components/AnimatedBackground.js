"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"
import styles from "./AnimatedBackground.module.css"

const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let stars = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 10000)

      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 1.5 + 0.5
        const isDark = theme === "dark"
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: size,
          originalRadius: size,
          color: isDark
            ? `rgba(79, 159, 255, ${Math.random() * 0.4 + 0.2})`
            : `rgba(37, 99, 235, ${Math.random() * 0.3 + 0.1})`,
          speed: Math.random() * 0.01,
          pulse: Math.random() * Math.PI,
          pulseSpeed: 0.003 + Math.random() * 0.005,
        })
      }
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set background gradient based on theme
      const isDark = theme === "dark"
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

      if (isDark) {
        gradient.addColorStop(0, "#000000")
        gradient.addColorStop(1, "#050510")
      } else {
        gradient.addColorStop(0, "#f5f7fa")
        gradient.addColorStop(1, "#e9ecef")
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Update pulse
        star.pulse += star.pulseSpeed
        const pulseFactor = Math.sin(star.pulse) * 0.5 + 0.5
        star.radius = star.originalRadius * (1 + pulseFactor * 0.3)

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        // Add subtle glow effect
        const isDark = theme === "dark"
        const glowColor = isDark ? "79, 159, 255" : "37, 99, 235"
        const glowOpacity = isDark ? 0.1 * pulseFactor : 0.05 * pulseFactor

        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3)
        glow.addColorStop(0, `rgba(${glowColor}, ${glowOpacity})`)
        glow.addColorStop(1, `rgba(${glowColor}, 0)`)

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Move star
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(drawStars)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawStars()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className={styles.canvas} />
}

export default AnimatedBackground
