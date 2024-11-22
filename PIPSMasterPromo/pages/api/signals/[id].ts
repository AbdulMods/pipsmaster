import type { NextApiRequest, NextApiResponse } from 'next'

let signals: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const signalIndex = signals.findIndex(signal => signal.id === id)

  if (req.method === 'PUT') {
    if (signalIndex > -1) {
      signals[signalIndex] = { ...signals[signalIndex], ...req.body, updatedAt: new Date().toISOString() }
      res.status(200).json(signals[signalIndex])
    } else {
      res.status(404).json({ message: 'Signal not found' })
    }
  } else if (req.method === 'DELETE') {
    if (signalIndex > -1) {
      signals.splice(signalIndex, 1)
      res.status(200).json({ message: 'Signal deleted successfully' })
    } else {
      res.status(404).json({ message: 'Signal not found' })
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

