import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    console.log(`Attempting to send email from ${email} to syeddaruman@gmail.com`)
    console.log(`RESEND_API_KEY exists: ${!!process.env.RESEND_API_KEY}`)

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing Resend API key")
      return NextResponse.json(
        {
          error: "Configuration error: Missing API key",
          details: "The server is not properly configured to send emails",
        },
        { status: 500 },
      )
    }

    // Create the email content
    const emailSubject = subject ? `[Portfolio Contact] ${subject}` : "New message from your portfolio"
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <div style="margin-bottom: 20px;">
          <p style="font-weight: bold;">From:</p>
          <p>${name} (${email})</p>
        </div>
        <div style="margin-bottom: 20px;">
          <p style="font-weight: bold;">Subject:</p>
          <p>${subject || "No subject provided"}</p>
        </div>
        <div>
          <p style="font-weight: bold;">Message:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #777;">
          This email was sent from your portfolio contact form.<br>
          You can reply directly to this email to respond to ${name}.
        </p>
      </div>
    `

    try {
      // Send the email using Resend
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "syeddaruman@gmail.com",
        subject: emailSubject,
        html: emailContent,
        reply_to: email,
      })

      // Handle any errors from Resend
      if (error) {
        console.error("Resend API error:", error)
        return NextResponse.json(
          {
            error: "Failed to send email",
            details: error.message,
            code: error.statusCode,
          },
          { status: error.statusCode || 500 },
        )
      }

      console.log("Email sent successfully:", data)

      // Return success response
      return NextResponse.json({
        success: true,
        message: "Email sent successfully",
        data: data,
      })
    } catch (sendError) {
      console.error("Error sending email:", sendError)
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: sendError.message,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Server error in email API route:", error)
    return NextResponse.json(
      {
        error: "Server error processing your request",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
