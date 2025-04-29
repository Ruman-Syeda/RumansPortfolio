import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Ruman Syeda - Portfolio",
  description: "Professional portfolio showcasing my skills, experience, and projects",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
