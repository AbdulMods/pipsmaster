import type { NextApiRequest, NextApiResponse } from 'next'

let signals: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const signal = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    }
    signals.push(signal)
    res.status(201).json(signal)
  } else if (req.method === 'GET') {
    res.status(200).json(signals)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

