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

    // Log the contact information (in a real app, you would save this to a database)
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Return success
    return NextResponse.json({
      success: true,
      message: "Contact information received successfully",
      data: {
        name,
        email,
        subject,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Server error in simple contact API route:", error)
    return NextResponse.json(
      {
        error: "Server error processing your request",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
