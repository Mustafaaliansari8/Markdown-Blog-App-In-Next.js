import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request) {
  try {
    const data = await request.json()
    
    const filePath = path.join(process.cwd(), 'data', 'contacts.json')
    const contacts = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]')
    
    const newContact = {
      ...data,
      id: Date.now(),
      timestamp: new Date().toISOString()
    }
    
    contacts.push(newContact)
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2))
    
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'contacts.json')
    const contacts = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]')
    return NextResponse.json(contacts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 })
  }
}
