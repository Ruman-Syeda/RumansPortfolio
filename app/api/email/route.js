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

    // Create the email content with a professional template
    const emailSubject = subject
      ? `${subject} - Portfolio Contact from ${name}`
      : `New message from ${name} via Portfolio`
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-container {
            border: 1px solid #e1e1e1;
            border-radius: 5px;
            overflow: hidden;
          }
          .email-header {
            background: linear-gradient(135deg, #2563eb, #3b82f6);
            color: white;
            padding: 20px;
            text-align: center;
          }
          .email-body {
            padding: 20px;
            background-color: #f9f9f9;
          }
          .email-footer {
            background-color: #f1f1f1;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .sender-info {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e1e1e1;
          }
          .message-content {
            background-color: white;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #3b82f6;
          }
          .label {
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 5px;
          }
          .value {
            margin-bottom: 15px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>New Portfolio Contact Message</h1>
          </div>
          <div class="email-body">
            <div class="sender-info">
              <div class="label">From:</div>
              <div class="value">${name}</div>
              
              <div class="label">Email:</div>
              <div class="value">${email}</div>
              
              <div class="label">Subject:</div>
              <div class="value">${subject || "No subject provided"}</div>
            </div>
            
            <div class="label">Message:</div>
            <div class="message-content">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div class="email-footer">
            <p>This email was sent from your portfolio contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      </body>
      </html>
    `

    try {
      // Send the email using Resend
      const { data, error } = await resend.emails.send({
        from: `Portfolio Contact <contact@${process.env.NEXT_PUBLIC_DOMAIN || "portfolio.example.com"}>`,
        to: "syeddaruman@gmail.com",
        subject: emailSubject,
        html: emailContent,
        reply_to: email, // This ensures replies go to the sender's email
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
