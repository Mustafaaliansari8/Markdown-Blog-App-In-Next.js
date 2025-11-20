import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL
    
    if (webhookUrl) {
      const message = webhookUrl.includes('discord') 
        ? {
            embeds: [{
              title: '📧 New Contact Form Submission',
              color: 6301695,
              fields: [
                { name: 'Name', value: data.name, inline: true },
                { name: 'Email', value: data.email, inline: true },
                { name: 'Subject', value: data.subject },
                { name: 'Message', value: data.message }
              ],
              timestamp: new Date().toISOString()
            }]
          }
        : {
            text: `*New Contact Form Submission*\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Subject:* ${data.subject}\n*Message:* ${data.message}`
          }
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      })
    }
    
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
