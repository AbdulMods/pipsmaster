import type { NextApiRequest, NextApiResponse } from 'next'

// This is a mock database. In a real application, you would use a proper database.
let posts: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const post = req.body
    posts.push(post)
    res.status(201).json(post)
  } else if (req.method === 'GET') {
    res.status(200).json(posts)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

