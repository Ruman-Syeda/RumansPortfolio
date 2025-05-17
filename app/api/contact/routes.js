import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json().catch((e) => {
      console.error("Failed to parse JSON:", e)
      return {}
    })

    const { name, email, subject, message } = body

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create a simple mailto link as fallback
    const mailtoLink = `mailto:syeddaruman@gmail.com?subject=${encodeURIComponent(
      subject || "Contact from Portfolio",
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`

    // Return success with the mailto link
    return NextResponse.json({
      success: true,
      message: "Contact information processed. Opening email client as fallback.",
      mailtoLink,
    })
  } catch (error) {
    console.error("Server error in contact API route:", error)
    return NextResponse.json(
      {
        error: "Server error processing your request",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
