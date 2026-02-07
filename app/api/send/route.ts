import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response("Missing RESEND_API_KEY", { status: 500 });
  }
  const resend = new Resend(apiKey);
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY. Please set it in .env.local')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Send email using Resend
    console.log('Attempting to send email via Resend...')
    console.log('From:', process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev')
    console.log('To: brendaqc.contact@gmail.com')
    
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: 'brendaqc.contact@gmail.com',
      subject: 'portfolio message',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      replyTo: email, // So you can reply directly to the sender
    })

    console.log('Resend API response:', JSON.stringify(result, null, 2))

    // Check if Resend returned an error
    if (result.error) {
      console.error('Resend API error:', result.error)
      return NextResponse.json(
        { error: result.error.message || 'Failed to send email via Resend', details: result.error },
        { status: 500 }
      )
    }

    if (!result.data) {
      console.error('Resend returned no data:', result)
      return NextResponse.json(
        { error: 'Resend API returned unexpected response', details: result },
        { status: 500 }
      )
    }

    console.log('Email sent successfully. Resend ID:', result.data.id)

    return NextResponse.json(
      { message: 'Email sent successfully', id: result.data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
