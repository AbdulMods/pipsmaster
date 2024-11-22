import type { NextApiRequest, NextApiResponse } from 'next'

// This is a mock database. In a real application, you would use a proper database.
let signals: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const signal = req.body
    signals.push(signal)
    res.status(201).json(signal)
  } else if (req.method === 'GET') {
    res.status(200).json(signals)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

